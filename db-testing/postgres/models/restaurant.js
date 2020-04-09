const Sequelize = require('sequelize');
const sequelize = require('../connection.js');

const Restaurant = sequelize.define('restaurants', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  businessName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Restaurant;