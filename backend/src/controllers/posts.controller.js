const postSchema = require('../models/Posts')

// Printing `Hello World`
const helloWorld = (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    })
}

// Creating Post
const createPost = (req, res) => {

    const newPost = new postSchema({
        authorName: req.body.authorName,
        postContent: req.body.postContent,
    })

    newPost.save()
        .then(() => {
            // Server Server Response
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
const readPosts = (req, res) => {

}

// Reading Post by ID
const readPost = (req, res) => {
    postSchema.findById({_id: req.params.id}, (err, results) => {
            if (err) {
                console.log(err, "POST_NOT_EXSIST")
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
const updatePost = (req, res) => {

    const postUpdate = postSchema.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            postContent: req.body.postContent,
        },
    }, {
        new: true,
    })
    if (postUpdate) {
        res.status(200).json({
            message: "Post successfully updated!",
            isUpdated: "true",
        })
    } else {
        console.log("UPDATE_ERROR")
        res.status(500).json({
            message: "Post wasn't able to update."
        })
    }
}


// Deleting Post
const deletePost = (req, res) => {
    res.status(200).json({
        message: 'Successfully deleted the Post!'
    })
}


module.exports = { helloWorld, createPost, readPosts, readPost, updatePost, deletePost } 