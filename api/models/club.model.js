const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database/index") // Our connection's instance

const Club = sequelize.define("club", {
  companyName: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  telephone: {
    type: DataTypes.INTEGER(20),
    
  },
  password: {
    type: DataTypes.CHAR(255),
    allowNull: false

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
