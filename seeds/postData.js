const { Post } = require('../models');

const postData = [
    {
        "post_name": "Foo",
        "contents": "Fee Fi Fo Fum I like Rum",
        "post_date": 'March 30, 2018',
        "user_id": 1
    },
    {
        "post_name": "Foo",
        "contents": "Fee Fi Fo Fum I like Rum",
        "post_date": 'March 30, 2019',
        "user_id": 2
    },
    {
        "post_name": "Foo",
        "contents": "Fee Fi Fo Fum I like Rum",
        "post_date": 'March 30, 2020',
        "user_id": 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;