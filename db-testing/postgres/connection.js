const { Sequelize } = require('sequelize');

var sequelize = new Sequelize('nocap', 'postgres', 'secret', {
  host: 'localhost',
  dialect: 'postgres'
});

// Or you can simply use a connection uri
//var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

module.exports = sequelize;