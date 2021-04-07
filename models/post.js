const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema for posts
const PostSchema = new Schema({
    body: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    user_posted: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    exactlocation: {
        type: String,
        required: false
    }
})

module.exports = Post = mongoose.model('Post', PostSchema);
