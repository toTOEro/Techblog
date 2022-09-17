// import models
const Post = require('./Post');
const User = require('./User');


// Post belongsTo User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Users have many Posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
