const jwt = require('jsonwebtoken')

const signJwt = (id, email) => {
    return jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: '10d', subject: id })
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.TOKEN_SECRET)
}

module.exports = { signJwt, verifyToken }