const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index"); // Our connection's instance

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
  latitude: {
    type: DataTypes.DOUBLE(20, 15),
  },
  longitude: {
    type: DataTypes.DOUBLE(20, 15),
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  openTime: {
    type: DataTypes.TIME,
  },
  closeTime: {
    type: DataTypes.TIME,
  },
  rooms: {
    type: DataTypes.INTEGER,
  },
  minimumAge: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.STRING(255),
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Event;
