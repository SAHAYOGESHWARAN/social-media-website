
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: String,
    content: String,
    likes: { type: Number, default: 0 },
    comments: [{ user: String, text: String }],
    media: String
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
