// import models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
// const PostComment = require('./PostComment')

// Post belongsTo User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Users have many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});


// Posts have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Comments belongTo Posts
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  unique: false
})

module.exports = {
  User,
  Post,
  Comment
};
