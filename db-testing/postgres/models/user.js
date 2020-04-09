const Sequelize = require('sequelize');
const sequelize = require('../connection.js');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cityState: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  avatar: {
    type: Sequelize.STRING,
    allowNull: false
  },
  friends: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  photos: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = User;