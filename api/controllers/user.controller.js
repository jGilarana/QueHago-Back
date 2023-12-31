const Event = require("../models/event.model")
const Rating = require("../models/rating.model")
const User = require("../models/user.model")
const cloudinary =  require('cloudinary').v2
const bcrypt = require("bcrypt")

async function getAllUsers(req, res) {
  try {
    const user = await User.findAll()
    res.status(200).json(user)
  } catch (error) {
    res.status(403).send(error.message)
  }
}
async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id)
    res.status(200).json(user)
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body)
    res.status(200).send("user created")
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function updateUser(req, res) {
  try {
    if (req.body.password) {
      const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
      const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds) // Hash the original password with the number we have provided.
      req.body.password = hashedPassword
   }
    const [user, userExists] = await User.update(req.body, {
      where: { id: req.params.id },
    })

    if (user) {
    return res.status(200).send("User updated!")
    } else {
       res.status(404).send("NO user found")
    }
   console.log('wtf')
  } catch (error) {
    res.status(403).send(error.message)
  }
}

async function updateProfile(req, res) {
  try {
    if (req.body.password) {
       const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
       const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds) // Hash the original password with the number we have provided.
       req.body.password = hashedPassword
    }
   
    const [user, userExists] = await User.update(req.body, {
      where: { id: res.locals.member.id },
    })

    if (userExists === 0) {
      res.status(404).send("NO user found")
    }
    return res.status(200).send("User updated!")
  } catch (error) {
    res.status(403).send(error.message)
  }
}



async function deleteUser(req, res) {
  try {
    const user = await User.destroy({ where: { id: req.params.id } })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

async function getProfile(req,res) {
  try {
    const user = await User.findByPk(res.locals.member.id)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(402).send("user not found")
  }
}


async function setFavorite(req, res) {
  try {
    const user = await User.findByPk(res.locals.member.id)
    const event = await Event.findByPk(req.body.eventId)
    await user.addUsersFavoriteEvent(event)
    if (!event) {
      return res.status(400).send('No event found')
    }
    return res.status(200).send('Favorite added!')
  } catch (error) {
    return res.status(403).send(error.message)
  }
}

async function setRating(req,res) {
  try {
    const user = await User.findByPk(res.locals.member.id)
    const event = await Event.findByPk(req.body.eventId)
    await user.addUsersRatedEvent(event, { through: { rate: req.body.rate } })
    if (!event) {
      return res.status(400).send('No event found')
    }
    return res.status(200).send('Rating added!')
  } catch (error) {
    return res.status(400).send('Rating not added!')
  }
}

async function getUsersFavorite(req, res) {
  try {
    const user = await User.findByPk(res.locals.member.id)
    const events = await user.getUsersFavoriteEvent()
    return res.status(200).json(events)
  } catch (error) {
    return res.status(403).send(error.message)
  }
}


async function getUsersRating(req, res)  {
  try {
    const user = await User.findByPk(res.locals.member.id)
    const events = await user.getUsersRatedEvent()
    res.status(200).json(events)
  } catch (error) {
    res.status(400).send(error.message)
  }
}


async function deleteUsersFav(req,res) {
  console.log(req.params)
  try {
    const user = await User.findByPk(res.locals.member.id)
    const event = await Event.findByPk(req.params.eventId)
    await user.removeUsersFavoriteEvent(event)
    if (!event) {
      return res.status(400).send('No event found')
    }
    return res.status(200).send('Favorite deleted!')
  } catch (error) {
    return res.status(403).send(error.message)
  }
}


module.exports = {deleteUsersFav, updateProfile, getAllUsers, getOneUser, createUser, updateUser, deleteUser, setFavorite, getUsersFavorite, setRating, getUsersRating, getProfile}