const router = require('express').Router();
const { Post } = require('../../models');

// The `/api/post` endpoint

// find all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err)
  }
});

// find one post by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      // include: [{ model: Product }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new post
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);

  } catch (err) {
    res.status(500).json(err)
  }

});

router.put('/:id', async (req, res) => {
  // update a post by its `id` value
  try {
    const postData = await Post.update(req.body, {
      where: { id: req.params.id }
    })

    if (!postData[0]) {
      res.status(404).json({ message: 'No post found with that ID!' });
      return;
    };

    res.status(200).json({ message: `Successfully updated post ID: ${req.params.id}` })
  } catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a post by its `id` value
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with that ID!' });
      return;
    };

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  };
});

module.exports = router;
