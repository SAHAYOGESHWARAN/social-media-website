
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
    const { user, content } = req.body;
    const media = req.file ? req.file.filename : null;

    const post = new Post({ user, content, media });
    await post.save();
    res.status(201).json(post);
};

exports.getPosts = async (req, res) => {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
};

exports.likePost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    post.likes += 1;
    await post.save();
    res.json(post);
};

exports.commentPost = async (req, res) => {
    const { id } = req.params;
    const { user, text } = req.body;

    const post = await Post.findById(id);
    post.comments.push({ user, text });
    await post.save();
    res.json(post);
};
