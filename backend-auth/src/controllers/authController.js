const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.login = async (req, res) => {
  const { usuario, clave } = req.body;
  const user = await User.findOne({ where: { usuario } });
  if (!user) return res.status(401).json({ mensaje: 'Usuario no encontrado' });

  const esValido = bcrypt.compareSync(clave, user.clave);
  if (!esValido) return res.status(401).json({ mensaje: 'Clave incorrecta' });

  const token = jwt.sign({ id: user.id }, 'secreto123', { expiresIn: '1h' });
  res.json({ token });
};

exports.getProfile = async (req, res) => {
  const user = await User.findByPk(req.userId);
  res.json({ nombre: user.nombre, apellido: user.apellido, alias: user.alias, fechaNacimiento: user.fechaNacimiento });
};