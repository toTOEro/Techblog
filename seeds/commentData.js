const { Comment } = require('../models')


const commentData = [
  {
    "comment": "Test Comment 1",
    "comment_date": 'March 30, 2020',
    "post_id": 1,
    "user_id": 1,
  },
  {
    "comment": "Test Comment 1",
    "comment_date": 'March 30, 2019',
    "post_id": 1,
    "user_id": 1,

  },
  {
    "comment": "Test Comment 1",
    "comment_date": 'March 30, 2018',
    "post_id": 2,
    "user_id": 1,

  }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;