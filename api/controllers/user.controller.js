const User = require("../models/user.model")

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

    if (!userExists) {
      res.status(404).send("NO user found")
    }
    return res.status(200).json(user)
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

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser }
