const router = require("express").Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

const {
  signUp,
  login,
  verify
} = require('../controller/auth.controller');

router.post('/login', login)

router.post('/signup', signUp)

router.get('/verify', isAuthenticated, verify)

module.exports = router;

