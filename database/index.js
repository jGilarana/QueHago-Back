const { Sequelize } = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DIALECT,
    port: process.env.DB_PORT,
    logging: false,
  }
) //DB CREATION

async function checkConn() {
  //DB CONN checking function
  try {
    await sequelize.authenticate()
    console.log("Nice, you are connected!")
  } catch (error) {
    console.log(error)
  }
}

async function syncModels() {
  try {
    await sequelize.sync({ alter: true })
    console.log("sync models succesful")
  } catch (error) {
    console.log(error)
  }
}

module.exports = { checkConn, syncModels, sequelize }
