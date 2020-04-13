'use strict';
const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let func;
    for (let i = 0; i < 5; i++) {
      let data = [];
      let entries = 0;
      console.log(i);
      while(entries < 500000) {
        let date = new Date();
        let firstName = faker.name.firstName();
        data.push({
          username: firstName + Math.floor(Math.random() * 4000),
          firstName: firstName,
          lastName: faker.name.lastName(),
          cityState: faker.address.city() + ', ' + faker.address.stateAbbr(),
          avatar: `https://i.pravatar.cc/150?img=${faker.random.number({min: 1, max: 70})}`,
          friends: faker.random.number({min: 1, max: 2000}),
          photos: faker.random.number({min: 1, max: 100}),
          createdAt: date,
          updatedAt: date,
        })
        entries++;
      }
      func = queryInterface.bulkInsert('users', data, {});
    }
    return func;
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};