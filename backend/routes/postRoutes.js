
const express = require('express');
const { createPost, getPosts, likePost, commentPost } = require('../controllers/postController');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('media'), createPost);
router.get('/', getPosts);
router.put('/:id/like', likePost);
router.post('/:id/comment', commentPost);

module.exports = router;
