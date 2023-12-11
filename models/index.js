const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User')

User.hasMany(Post, {
    foreign: 'user_id',
    onDelete:'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
     as: 'user'
  });

User.hasMany(Comment, {
    foreign: 'user_id',
    onDelete:'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
  });


module.exports = {
    User,
    Post,
    Comment
}