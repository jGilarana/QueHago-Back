const Event = require("../models/event.model")
const Rating = require("../models/rating.model")
const User = require("../models/user.model")
const cloudinary =  require('cloudinary').v2
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
    const [user, userExists] = await User.update(req.body, {
      where: { id: req.params.id },
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

async function getImage(req, res) {
  cloudinary.config({ 
    cloud_name: 'djpdopxfy', 
    api_key: '859719466848547', 
    api_secret: 'kZFpcokasmO8MBTAvji-4MBbBUo' 
  });
  const options = {
    colors: true,
    folder: 'Quegit stHago',
    use_filename: true
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(req.file.path, options);
    console.log(result);
    return res.status(200).json(result.public_id);
  } catch (error) {
    console.error(error);
  }
};


async function postImage(req,res) {
  try {
    
  } catch (error) {
    
  }
}

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser, setFavorite, getUsersFavorite, setRating, getUsersRating, getProfile, getImage}