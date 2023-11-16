const { DataTypes } = require('sequelize');
const {sequelize} = require('../../database/index') // Our connection's instance

const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  joinDate: {
    type: DataTypes.DATE,
    defaultValue: function () {
      return new Date()
  }
  }
})

module.exports = User