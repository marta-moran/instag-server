const { verifyToken } = require('../utils/jwt.utils')

const validateToken = (req, res, next) => {

  const { authorization } = req.headers

  if (authorization) {
    const token = authorization.substring(7)
    console.log("QUE ME LLEGA ===>", verifyToken(token))
    const { _id: id, email } = verifyToken(token)
    console.log("INFO TOKEN", id, email)
    req.user = { id, email }
  }

  else {
    res.sendStatus(401)
    return
  }

  next()
}

module.exports = {
  validateToken
};
