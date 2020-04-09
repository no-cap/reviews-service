const faker = require('faker');

let businesses = [];
let businessNames = () => {
  let counter = 0;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 500000; j++) {
      businesses.push(`${faker.name.lastName()} - ${faker.name.lastName()}`);
      counter++;
    }
    console.log('businesses: ', counter);
    console.log(businesses[businesses.length - 1]);
  }
  console.log('Finished creating businesses array')
  return businesses;
}

// businessNames();

module.exports = { businessNames };