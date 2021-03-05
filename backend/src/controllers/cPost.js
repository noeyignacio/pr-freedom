import Post from '../models/mPosts.js'
import { createPostValidator, updatePostValidator } from '../middlewares/validator.js'

// [TEST] Printing `Hello World`
export const helloWorld = (req, res) => {
    res.status(200).json({
        message: "Hello World!"
    })
}

// Creating Post 
export const createPost = async (req, res) => {

    try {
        const newPost = new Post({
            authorName: req.body.authorName,
            postContent: req.body.postContent,
        })
        const post = await createPostValidator.validateAsync(req.body)
        if (post) {
            await newPost
            .save()
            .then(() => {
                // Server Response
                console.log(`${req.body.authorName}_CREATED_POST`)
                // Web Response
                res.status(200).json({
                    authorName: req.body.authorName,
                    postContent: req.body.postContent,
                    message: "Post Created Successfully!"
                })
            })
        }
    } catch (error) {
        // Server Response
        console.log("POST_ERROR")
        // Web Response
        res.status(500).json({
            message: error.message
        })
    }
}

// Reading All Posts
export const readPosts = async (req, res) => {

    try {
        const posts = await Post.find()
        if (posts.length == 0) {
            // Server Response
            console.log("NO_POST_AVAILABLE")
            // Web Response
            res.status(200).json({
                message: "No posts found."
            })
        } else {
            res.status(200).json(posts)
        }
    } catch (error) {
        // Server Response
        console.log('GETTING_ALL_POST_ERROR')
        // Web Response
        res.status(500).json({
            error: error.message,
            message: "No posts found."
        })
    }
}

// Reading Post by ID (Specific)
export const readPost = async (req, res) => {

    await Post.findById({_id: req.params.id}, (error, results) => {
            if (error) {
                // Server Response
                console.log(error, "POST_NOT_EXSIST")
                // Web Response
                res.status(500).json({
                    message: "No Post Exists.",
                    error: error.message,
                })
            } else {
                res.status(200).json({
                    authorName: results.authorName,
                    postContent: results.postContent,
                    isPosted: results.isPosted,
                    isUpdated: results.isUpdated,
                    createdAt: results.createdAt,
                })
            }
    })
}

// Updating Post
export const updatePost = async (req, res) => {

    try {
        const postUpdate = await Post.findById(req.params.id)
        const post = await updatePostValidator.validateAsync(req.body)
        if (post) {
            postUpdate.postContent = req.body.postContent
            await postUpdate
            .save()
            .then(() => {
                // Server Response
                console.log(`${req.body.authorName}_UPDATED_POST`)
                // Web Response
                res.status(200).json({
                    authorName: req.body.authorName,
                    postContent: req.body.postContent,
                    message: "Post Updated Successfully!"
                })
            })
        }
    } catch (error) {
        // Server Response
        console.log("UPDATE_ERROR")
        // Web Response
        res.status(500).json({
            message: "Post wasn't able to update.",
            error: error.message
        })
    }
}


// Deleting Post
export const deletePost = async (req, res) => {
    
    try {
        await Post.remove({
            _id: req.params.id,
        })
        console.log(`POST_DELETED`)
        res.status(200).json({
            message: "Post Deleted successfully!"
        })
    } catch (error) {
        console.log('POST_NOT_EXSIST')
        res.status(500).json({ 
            error: error.message,
            message: "Post does not exist!" 
        })
    }
}