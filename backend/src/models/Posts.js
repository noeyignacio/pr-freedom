const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
    },
    postContent: {
        type: String,
        required: true,
        min: 1,
        max: 300,
    },
    isPosted: {
        type: Boolean,
        required: true,
        default: true 
    },
    isUpdated: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('Post', PostSchema) ;