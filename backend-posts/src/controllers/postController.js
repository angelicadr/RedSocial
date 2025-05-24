const Post = require('../models/Post');
const Like = require('../models/Like');
const { Op } = require('sequelize');

exports.getPosts = async (req, res) => {
  const posts = await Post.findAll({
    where: { userId: { [Op.ne]: req.userId } },
    order: [['id', 'DESC']]
  });
  const likes = await Like.findAll();
  const result = posts.map(p => ({
    ...p.toJSON(),
    likes: likes.filter(l => l.postId === p.id).length
  }));
  res.json(result);
};

exports.createPost = async (req, res) => {
  const { mensaje } = req.body;
  const post = await Post.create({ userId: req.userId, mensaje });
  res.status(201).json(post);
};

exports.likePost = async (req, res) => {
  const { id } = req.params;
  const exists = await Like.findOne({ where: { userId: req.userId, postId: id } });
  if (exists) return res.status(400).json({ mensaje: 'Ya le diste like' });
  await Like.create({ userId: req.userId, postId: id });
  res.json({ mensaje: 'Like enviado' });
};