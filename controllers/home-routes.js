
// Importing required packages
const router = require('express').Router();
const withAuth = require('../utils/auth')
const { User, Post, Comment } = require('../models');



// Homepage route
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            order: [['post_date', 'DESC']],
            include: [{
                model: User,
                as: 'user',
                attributes: ['username']
            },
            {
                model: Comment,
            }
            ]
        });
        const posts = postData.map(post => post.get({ plain: true }));

        res.render('posts', {
            posts,
            loggedIn: req.session.loggedIn,
        })

    } catch (err) {
        res.status(500).json(err)
    }
})

// View specific post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{
                model: User,
                as: 'user',
                attributes: ['username']
            },
            {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['username']
                }]
            }]
        });

        const posts = postData.get({ plain: true });

        res.render('singlePost', {
            posts,
            loggedIn: req.session.loggedIn,
        })

    } catch (err) {
        res.status(500).json(err)
    }
})

// Renders post page
router.get('/post', withAuth, async (req, res) => {
    res.render('newPost', { loggedIn: req.session.loggedIn })

})

// View user dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{
                model: User,
                as: 'user',
                attributes: ['username'],
                where: {
                    username: req.session.userId
                }
            },
            {
                model: Comment,
            }
            ]
        });

        const posts = postData.map(post => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
        })

    } catch (err) {
        res.status(500).json(err)
    }

})

// Access user post dashboard
router.get('/dashboard/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            // include: [{
            //     model: User,
            //     as: 'user',
            //     attributes: ['username']
            // }]
        });

        const post = postData.get({ plain: true });


        res.render('postDash', {
            post,
            loggedIn: req.session.loggedIn,
        })

    } catch (err) {
        res.status(500).json(err)
    }
})

// View login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');


})

module.exports = router;