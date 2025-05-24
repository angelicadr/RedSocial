const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  alias: DataTypes.STRING,
  fechaNacimiento: DataTypes.DATEONLY,
  usuario: DataTypes.STRING,
  clave: DataTypes.STRING,
});

module.exports = User;