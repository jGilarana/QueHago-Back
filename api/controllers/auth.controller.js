const bcrypt = require("bcrypt")
const User = require("../models/user.model")
const jwt = require("jsonwebtoken")

async function signup(req, res) {
  const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS))
  const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds) // Hash the original password with the number we have provided.
  req.body.password = hashedPassword // update the body's password with the hashed password

  try {
    const user = await User.create(req.body) // create the user with the hashed password

    const payload = {
      email: user.email,
    }
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: "1h",
    })
    return res.status(200).json({
      token,
    })
  } catch (error) {
    console.log(error.message) // Log the error message for debugging
    return res.status(500).send(error.message)
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    })

    if (!user) return res.status(404).send("Error: Email  incorrect")

    const comparePass = bcrypt.compareSync(req.body.password, user.password)

    if (comparePass) {
      const payload = {
        email: user.email,
      }
      const token = jwt.sign(payload, process.env.SECRET, {
        expiresIn: "1h",
      })
      return res.status(200).json({
        token,
      })
    } else {
      return res.status(404).json("Error: Email or Password incorrect")
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  signup,
  login,
}
