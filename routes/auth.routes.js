const router = require("express").Router();
const { validateToken } = require("../middleware/jwt.middleware.js");

const {
  signUp,
  login,
  verify
} = require('../controller/auth.controller');

router.post('/login', login)

router.post('/signup', signUp)

router.get('/verify', validateToken, verify)

module.exports = router;

