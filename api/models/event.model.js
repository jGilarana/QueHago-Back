const { DataTypes } = require('sequelize');
const {sequelize} = require('../../database/index') // Our connection's instance


const Event = sequelize.define('event', {
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    minimum_age: {
      type: DataTypes.INTEGER
    }
  });

  module.exports = Event