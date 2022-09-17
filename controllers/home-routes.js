
// Importing required packages
const router = require('express').Router();
const withAuth = require('../utils/auth')
const { User, Post } = require('../models');



// Homepage route
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{
                model: User,
                as: 'user',
                attributes: ['username']
            }]
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