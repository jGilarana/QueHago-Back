const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database/index") // Our connection's instance

const Event = sequelize.define("event", {
  title: {
    type: DataTypes.CHAR(255),
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(120),
    allowNull: false,
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
})

module.exports = Event
