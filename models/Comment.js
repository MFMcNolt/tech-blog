const { Model, DataTypes } = require ('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Comment extends Model {}

Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_username: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: User,
          key: 'username',
        },
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Landmark,
          key: 'id',
        },
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    
},
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment',
    }
  );
  
  module.exports = Comment;