const jwt = require("jsonwebtoken")
const User = require("../models/user.model")
const Club = require("../models/club.model")
function checkAuth(req, res, next) {
  if (!req.headers.authorization) return res.status(401).send("Token not found")
  jwt.verify(
    req.headers.authorization,
    process.env.SECRET,
    async (err, result) => {
      if (err) return res.status(401).send("Token not valid")
      const club = await Club.findOne({
        where: {
          email: result.email,
        },
      })
      /* if (!club) return res.status(401).send("Club not found") */
      const user = await User.findOne({
        where: {
          email: result.email,
        },
      })
      const member = user || club
      if (!member) return res.status(401).send("Member not found")
      res.locals.member = member
      console.log(res.locals.member.firstName)
      next()
    }
  )
}


function checkEmail(req, res, next) {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regexp.test(req.body.email)) {
    return res.status(401).send('checkEmail: Email not Valid');
  } else {
    next();
  }
}

function checkPassword(req, res, next) {
  const regexp = /^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
  if (!regexp.test(req.body.password)) {
    return res.status(401).send('checkPassword: Password not Valid');

  } else {
    next();
  }
}

function checkAdmin(req, res, next) {
  if (res.locals.member.role !== "admin") {
    return res.status(401).send("You must be admin for this action")
  } else {
    next()
  }
}

function checkClub(req, res, next) {
  if (res.locals.member.subscriptionStatus != 1) {
    return res.status(401).send("You must be a company for this action")
  } else {
    next()
  }
}

module.exports = { checkAuth, checkAdmin, checkEmail, checkClub, checkPassword }
