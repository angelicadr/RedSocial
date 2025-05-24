const bcrypt = require('bcryptjs');
const User = require('../models/user');

const initUsers = async () => {
  await User.bulkCreate([
    {
      nombre: 'Juan', apellido: 'Pérez', alias: 'jperez', fechaNacimiento: '1990-05-01', usuario: 'juan', clave: bcrypt.hashSync('1234', 10),
    },
    {
      nombre: 'Ana', apellido: 'Gómez', alias: 'anita', fechaNacimiento: '1995-07-10', usuario: 'ana', clave: bcrypt.hashSync('1234', 10),
    },
  ]);
};

module.exports = initUsers;