import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
        min: 6,
        max: 30
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

export default mongoose.model('Post', PostSchema)