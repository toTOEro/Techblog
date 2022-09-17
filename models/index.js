// import models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment')

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
  foreignKey: 'comment_id',
  onDelete: 'CASCADE'
});

// Comments belongTo Posts
Comment.belongsTo(Post, {
  foreignKey: 'comment_id'
});


module.exports = {
  User,
  Post,
  Comment
};
