const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database/index") // Our connection's instance

const Club = sequelize.define("club", {
  companyName: {
    type: DataTypes.STRING(40),
  },
  email: {
    type: DataTypes.STRING(40),
  },
  telephone: {
    type: DataTypes.INTEGER(20),
  },
  address: {
    type: DataTypes.CHAR(255),
  },
  expiration_date: {
    type: DataTypes.DATE,
  },
  subscription_status: {
    type: DataTypes.BOOLEAN,
  },
})

module.exports = Club
