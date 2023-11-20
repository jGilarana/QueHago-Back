const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
function checkAuth(req, res, next) {
  if (!req.headers.authorization) return res.status(401).send("Token not found")
  jwt.verify(
    req.headers.authorization,
    process.env.SECRET,
    async (err, result) => {
      if (err) return res.status(401).send("Token not valid")
      const user = await User.findOne({
        where: {
          email: result.email,
        },
      })
      if (!user) return res.status(401).send("User not found")
      res.locals.user = user

      next()
    }
  )
}

function checkAdmin(req, res, next) {
  if (res.locals.user.role !== "admin") {
    return res.status(401).send("You must be admin for this action")
  } else {
    next()
  }
}

// function checkClub(req, res, next) {
//   const token = req.header('Authorization');

//   if (!token) {
//     return res.status(401).send('Token not provided');
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.SECRET);
//     const userEmail = decoded.email;

//     // Aquí puedes hacer lo que necesites con la información del usuario
//     if (res.locals.club.email !== userEmail || res.locals.club.subscriptionStatus !== 1) {
//       return res.status(401).send('You must be a company for this action');
//     }

//     // Usuario válido, continúa con la siguiente middleware o ruta
//     next();
//   } catch (error) {
//     console.log(res.locals)
//     console.log(error.message);
//     return res.status(401).send('Invalid token');
//   }
// }
module.exports = { checkAuth, checkAdmin }
