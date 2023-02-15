const { verifyToken } = require('../utils/jwt.utils')

const validateToken = (req, res, next) => {

  const { authorization } = req.headers

  console.log("QUÉ LLEGA AQUÍ???", req.headers)

  if (authorization) {
    const token = authorization.substring(7)
    const { sub: id, email } = verifyToken(token)
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
