// title, body y los timestamps
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    body: String
}, {timestamps: true})

const Post = mongoose.model(`Post`, PostSchema);

module.exports = Post;