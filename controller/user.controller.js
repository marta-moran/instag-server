const User = require("../models/User.model");

const getUsers = (req, res, next) => {
    User.find()
        .then(users => {
            console.log(users)
            res.status(200).json({ message: users })
        })
        .catch(error => next(error))

    //habrá que sacar foto, nombre y comentarios
}

const getOneUser = (req, res, next) => {
    User.findById(req.params.id)
        .then((user) => {
            res.status(200).json(user)
        })
        .catch(error => next(error))
}

// const editUser = (req, res, next) => {
//     const { name, email } = req.body

//     User.findByIdAndUpdate(req.params.id, {name, email} )
//     .then(userUpdated =>  res.status(200).json({ message: `${userUpdated} se ha actualizado`  }))
//     .catch(error => next(error))
// }

// const deleteUser = (req, res, next) => {
//     User.findByIdAndDelete(req.params.id)
//     .then(deletedUser => res.status(200).json({message: `${deletedUser} se ha eliminado`}))
//     .catch(error => next(error))
// }

module.exports = {
    getUsers,
    getOneUser,
    //    editUser,
    //    deleteUser
};