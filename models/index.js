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


// // Comments belongTo Posts
// Comment.belongsToMany(Post, {
//   through: {
//     model: PostComment,
//     foreignKey: 'comment_id'
//   }
// });

// // Posts have many comments
// Post.belongsToMany(Comment, {
//   through: {
//     model: PostComment,
//     foreignKey: 'post_id',
//   }
// });

// Posts have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Comments belongTo Posts
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});


module.exports = {
  User,
  Post,
  Comment
};
