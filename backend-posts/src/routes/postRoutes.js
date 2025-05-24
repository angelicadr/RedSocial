const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { getPosts, createPost, likePost } = require('../controllers/postController');

router.get('/', verifyToken, getPosts);
router.post('/', verifyToken, createPost);
router.post('/:id/like', verifyToken, likePost);

module.exports = router;