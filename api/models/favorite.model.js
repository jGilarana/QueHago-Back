const { DataTypes } = require('sequelize');
const {sequelize} = require('../../database/index') // Our connection's instance


const Favorite = sequelize.define('favorite', {
  // Define tus campos aquí
}, {
  timestamps: false
});

  module.exports = Favorite