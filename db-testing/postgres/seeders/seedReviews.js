'use strict';
const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let entries = 0;
    let func;
    for (let i = 0; i < 100; i++) {
      console.log(i);
      while(entries < 500000) {
        const date = new Date();
        data.push({
          rating: faker.random.number({min: 1, max: 5}),
          comment: faker.lorem.paragraph(2),
          date: faker.date.between('2016-01-01', '2020-04-07').toLocaleDateString(),
          userId: faker.random.number({min: 1, max: 2500000}),
          useful: false,
          funny: false,
          cool: false,
          createdAt: date,
          updatedAt: date,
          restaurantId: faker.random.number({min: 1, max: 10000000})
        })
        entries++;
      }
      func = await queryInterface.bulkInsert('reviews', data, {});
    }
    return func;
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('reviews', null, {});
  }
};