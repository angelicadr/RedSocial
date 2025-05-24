const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Post = sequelize.define('Post', {
  userId: DataTypes.INTEGER,
  mensaje: DataTypes.TEXT,
  fecha: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW }
});

module.exports = Post;