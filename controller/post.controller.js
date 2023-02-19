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
    const { title, description } = req.body
    console.log(req.body)
    console.log("HOLAAAAAA")
    Post.findByIdAndUpdate(req.params.id, { title, description }, { new: true })
        .then(postUpdated => res.status(200).json({ message: postUpdated }))
        .catch(error => next(error))
}


const deletePost = (req, res, next) => {

    Post.findByIdAndDelete(req.params.id)
        .then(deletedPost => {
            return User.findByIdAndUpdate(deletedPost.author.toString(), { $pull: { posts: req.params.id } }, { new: true })
        })
        .then(user => {
            res.status(200).json({ message: "Se ha borrado el post" })
        })
        .catch(error => next(error))

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

    Post.findById(req.params.id)
        .populate("author")
        .then(post => res.status(200).json(post))
        .catch(error => next(error))

}

const fileUpload = (req, res, next) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    res.status(200).json(req.file.path)


}

const explorerPosts = (req, res, next) => {

    Post.find()
        .then(posts => res.status(200).json({ posts }))
        .catch(error => next(error))

}




module.exports = {
    publishPost,
    editPost,
    deletePost,
    getAllPosts,
    getOnePost,
    fileUpload,
    explorerPosts
}