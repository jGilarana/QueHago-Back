const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index') // Our connection's instance

const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING
  },
	age: {
		type: DataTypes.INTEGER
	}
})


