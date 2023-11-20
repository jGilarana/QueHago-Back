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
  password: {
    type: DataTypes.CHAR(255),
  },
  address: {
    type: DataTypes.CHAR(255),
  },
  expirationDate: {
    type: DataTypes.DATE,
  },
  subscriptionStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
})

module.exports = Club
