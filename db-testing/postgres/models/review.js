const Sequelize = require('sequelize');
const sequelize = require('../connection.js');

const Review = sequelize.define('reviews', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING(1024),
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
  useful: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  funny: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  cool: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

module.exports = Review;