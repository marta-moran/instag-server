
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

module.exports = { validateToken }
// // Instantiate the JWT token validation middleware
// const isAuthenticated = jwt({
//   secret: process.env.TOKEN_SECRET,
//   algorithms: ["HS256"],
//   requestProperty: "payload",
//   getToken: getTokenFromHeaders,
// });

// // Function used to extract the JWT token from the request's 'Authorization' Headers
// function getTokenFromHeaders(req) {
//   // Check if the token is available on the request Headers
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.split(" ")[0] === "Bearer"
//   ) {
//     // Get the encoded token string and return it
//     const token = req.headers.authorization.split(" ")[1];

//     return token;
//   }

//   return null;
// }

// Export the middleware so that we can use it to create protected routes
module.exports = {
  validateToken
};
