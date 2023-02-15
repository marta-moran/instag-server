const express = require("express");
const router = express.Router();

const {
  getUsers,
  getOneUser,
  editUser,
  deleteUser
} = require('../controller/user.controller');
const { validateToken } = require("../middleware/jwt.middleware");

// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });

router.get("/getAll", validateToken, getUsers)

router.get("/getUser/:id", getOneUser)

router.put("/editUser/:id", editUser)

router.delete('/deleteUser/:id', deleteUser)

module.exports = router;
