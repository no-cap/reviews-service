'use strict';
const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let entries = 0;
    let func;
    for (let i = 0; i < 10; i++) {
      console.log(i);
      while(entries < 1000000) {
        let date = new Date();
        data.push({
          businessName: faker.company.companyName(),
          createdAt: date,
          updatedAt: date
        })
        entries++;
      }
      func = await queryInterface.bulkInsert('restaurants', data, {});
    }
    return func;
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('restaurants', null, {});
  }
};