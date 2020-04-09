const express = require('express');
const sequelize = require('./connection.js');
const app = express();
//Model
const Restaurant = require('./models/restaurant.js');
const Review = require('./models/review.js');
const User = require('./models/user.js')

User.hasMany(Review, { foreignKey: { allowNull: false }, constraint: true, onDelete: 'CASCADE' });
Restaurant.hasMany(Review, { foreignKey: { allowNull: false }, constraint: true, onDelete: 'CASCADE' });
Review.belongsTo(User, { constraint: true });
Review.belongsTo(Restaurant, { constraint: true });

// Restaurant associations
// Restaurant.hasMany(Review, {
//   foreignKey: {
//     allowNull: false
//   },
//   constraints: true,
//   onDelete: 'CASCADE'
// });

// Review associations
// Review.belongsTo(Restaurant, {
//   foreignKey: 'businessId',
//   //constraints: true,
//   onDelete: 'CASCADE'
// });
// Review.belongsTo(User, {
//   foreignKey: 'userId',
//   // constraints: true,
//   onDelete: 'CASCADE'
// });

// // User associations
// User.hasMany(Review, {
//   foreignKey: {
//     allowNull: false
//   },
//   constraints: true,
//   onDelete: 'CASCADE'
// })


//Create DB
sequelize
  .sync()
  .then(result => {
    const port = process.env.PORT || 8080; //port 8080 for google app engine
    app.listen(port);
  })
  .catch(err => console.log(err));