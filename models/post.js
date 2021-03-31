const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema for posts
const PostSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    exactlocation: {
        type: String,
        required: true
    }
})

module.exports = Post = mongoose.model('Post', PostSchema);
