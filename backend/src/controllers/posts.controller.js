// Printing `Hello World`
const helloWorld = (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    })
}

// Creating Post
const createPost = (req, res) => {
    res.status(200).json({
        message: 'Post Created Succesfully!'
    })
}

module.exports = { helloWorld, createPost } 