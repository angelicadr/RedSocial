const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Like = sequelize.define('Like', {
  userId: DataTypes.INTEGER,
  postId: DataTypes.INTEGER,
});

module.exports = Like;