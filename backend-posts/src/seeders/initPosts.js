const Post = require('../models/Post');

const initPosts = async () => {
  await Post.bulkCreate([
    { userId: 1, mensaje: 'Hola, este es mi primer post!' },
    { userId: 2, mensaje: 'Qué tal todo por aquí?' }
  ]);
};

module.exports = initPosts;