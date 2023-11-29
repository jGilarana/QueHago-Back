const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database/index") // Our connection's instance

const Event = sequelize.define("event", {
  title: {
    type: DataTypes.CHAR(255),
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING(80),
   
  },
  address: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  latitude : {
    type: DataTypes.CHAR,
  },
  longitude : {
    type: DataTypes.CHAR,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rooms: {
    type: DataTypes.INTEGER,
  },
  minimumAge: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING(255),
  }
})

module.exports = Event
