const Post = require("../models/Post.model");
const User = require("../models/User.model")


const publishPost = (req, res, next) => {
    const { title, image, author, description } = req.body

    Post.create({ title, image, author, description })
        .then(post => {
            return User.findByIdAndUpdate(author, { $push: { posts: post.id } }, { new: true })
        })
        .then(updatedUser => res.status(200).json(updatedUser))
        .catch(error => next(error))

}

const editPost = (req, res, next) => {
    res.status(200).json('funciona')
}
const deletePost = (req, res, next) => {
    res.status(200).json('funciona')

}
const getAllPosts = (req, res, next) => {
    const { id } = req.user

    User.findById(id)
        .populate("posts")
        .populate({
            path: "posts",
            populate: {
                path: "author",
                model: "User"
            }
        })
        .then(user => {
            res.status(200).json(user.posts)
        })
        .catch(error => next(error))
}

const getOnePost = (req, res, next) => {
    res.status(200).json('funciona')

}

module.exports = {
    publishPost,
    editPost,
    deletePost,
    getAllPosts,
    getOnePost
}