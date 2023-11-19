const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
function checkAuth(req, res, next) {
    if (!req.headers.authorization) return res.status(401).send('Token not found')
    jwt.verify(req.headers.authorization, process.env.SECRET, async (err, result) => {
      if (err) return res.status(401).send('Token not valid')
      const user = await User.findOne({
        where: {
          email: result.email
        }
      })
      if (!user) return res.status(401).send('User not found')
      res.locals.user = user
    
      next()
    })
  }


  function checkAdmin(req, res, next) {
    if (res.locals.user.role !== 'admin') {
      return res.status(401).send('You must be admin for this action')  
    } else {
      next()  
    }
  }

  function checkClub(req, res, next) {
    if (res.locals.club.subscriptionStatus !== 1) {
      console.log(res.locals)
      return res.status(401).send('You must be admin for this action')  
    } else {
      next()  
    }
  }

  module.exports = { checkAuth, checkAdmin, checkClub }