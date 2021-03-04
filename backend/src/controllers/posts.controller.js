const Post = require('../models/Posts')

// [TEST] Printing `Hello World`
const helloWorld = (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    })
}

// Creating Post
const createPost = async (req, res) => {

    const newPost = new Post({
        authorName: req.body.authorName,
        postContent: req.body.postContent,
    })
    await newPost
        .save()
        .then(() => {
            // Server Response
            console.log(`${req.body.authorName}_POSTED`)
            // Web Response
            res.status(200).json({
                authorName: req.body.authorName,
                postContent: req.body.postContent,
                message: "Post created successfully!"
            })
        })
        .catch(err => {
            console.log('POST_ERROR')
            res.status(500).json({
                message: err.message
            })
        })
}

// Reading All Posts
const readPosts = async (req, res) => {

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
    } catch (err) {
        // Server Response
        console.log('GETTING_ALL_POST_ERROR')
        // Web Response
        res.status(500).json({
            error: err,
            message: "No posts found."
        })
    }
}

// Reading Post by ID (Specific)
const readPost = async (req, res) => {

    await Post.findById({_id: req.params.id}, (err, results) => {
            if (err) {
                // Server Response
                console.log(err, "POST_NOT_EXSIST")
                // Web Response
                res.status(500).json({
                    message: err
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
        }
    )
}

// Updating Post
const updatePost = async (req, res) => {

    const postUpdate = await Post.updateOne({_id: req.params.id}, {
        $set: {
            postContent: req.body.postContent,
            isUpdated: true,

        },
    })
    if (postUpdate) {
        // Server Response
        console.log("UPDATE_SUCCESS")
        // Web Response
        const updatedPost = await Post.findById({_id: req.params.id})
        res.status(200).json({
            updatedPost: updatedPost,
            message: "Post updated successfully!"
        })
    } else {
        // Server Response
        console.log("UPDATE_ERROR")
        // Web Response
        res.status(500).json({
            message: "Post wasn't able to update."
        })
    }
}


// Deleting Post
const deletePost = async (req, res) => {
    
    try {
        await Post.remove({
            _id: req.params.id,
        })
        console.log(`POST_DELETED`)
        res.status(200).json({
            message: "Post Deleted successfully!"
        })
    } catch (err) {
        console.log('POST_NOT_EXSIST')
        res.status(500).json({ 
            error: err,
            message: "Post does not exist!" 
        })
    }
}


module.exports = { helloWorld, createPost, readPosts, readPost, updatePost, deletePost } 