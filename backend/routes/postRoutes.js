// backend/routes/postRoutes.js
const express = require('express');
const { createPost, getPosts, likePost, commentPost } = require('../controllers/postController');
const multer = require('multer');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', verifyToken, upload.single('media'), createPost);
router.get('/', getPosts);
router.put('/:id/like', verifyToken, likePost);
router.post('/:id/comment', verifyToken, commentPost);

module.exports = router;
