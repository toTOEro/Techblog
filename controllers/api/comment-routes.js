const router = require('express').Router();
const { Post, User, Comment } = require('../../models');

// The `/api/post` endpoint

// // This is a test API endpoint to develop home-routes, 
// // TO BE DELETED
// router.get('/test', async (req, res) => {
//   try {
//     const commentData = await Comment.findAll({
//       // where: { id: req.session.uID },
//       include: [{
//         model: User,
//         as: 'user',
//         attributes: ['username'],
//         where: {
//           username: req.session.userId
//         }
//       },
//       {
//         model: Comment,
//       }
//       ]
//     });
//     res.status(200).json(commentData)
//   } catch (err) {
//     res.status(404).json(err)
//   }

// })


// find all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// // find one Comment by its `id` value
// router.get('/:id', async (req, res) => {
//   try {
//     const commentData = await Comment.findByPk(req.params.id, {
//     });
//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

router.post('/', async (req, res) => {
  // create a new Comment
  try {
    req.body.user_id = req.session.uID;
    console.log(req.body)
    const commentData = await Comment.create(req.body);
    console.log(commentData)
    res.status(200).json(commentData);

  } catch (err) {
    res.status(500).json(err)
  }

});

router.put('/:id', async (req, res) => {
  // update a Comment by its `id` value
  try {
    const commentData = await Comment.update(req.body, {
      where: { id: req.params.id }
    })

    if (!commentData[0]) {
      res.status(404).json({ message: 'No Comment found with that ID!' });
      return;
    };

    res.status(200).json({ message: `Successfully updated Comment ID: ${req.params.id}` })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a Comment by its `id` value
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with that ID!' });
      return;
    };

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
