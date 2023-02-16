const Post = require("../models/Post.model");


const publishPost = (req, res, next) => {
    res.status(200).json('funciona')
}
const editPost = (req, res, next) => {
    res.status(200).json('funciona')
}
const deletePost = (req, res, next) => {
    res.status(200).json('funciona')

}
const getAllPosts = (req, res, next) => {
    res.status(200).json('funciona')
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