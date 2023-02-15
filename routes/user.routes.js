const express = require("express");
const router = express.Router();
const { validateToken } = require("../middleware/jwt.middleware");

const {
  getUsers,
  getOneUser,
  editUser,
  deleteUser
} = require('../controller/user.controller');


// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });

router.get("/getAll", validateToken, getUsers)

router.get("/getUser/:id", getOneUser)

router.put("/editUser/:id", editUser)

router.delete('/deleteUser/:id', deleteUser)

module.exports = router;
