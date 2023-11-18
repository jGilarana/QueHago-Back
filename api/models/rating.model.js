const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database/index") // Our connection's instance

const Rating = sequelize.define("rating", {
  rate: {
    type: DataTypes.INTEGER,
  },
})

module.exports = Rating
