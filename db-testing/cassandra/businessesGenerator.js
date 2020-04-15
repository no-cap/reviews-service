const faker = require('faker');

let businesses = [];
let businessNames = () => {
  let counter = 1;
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 500000; j++) {
      let businessObj = {};
      businessObj.businessId = counter;
      businessObj.businessName = `${faker.name.lastName()} - ${faker.name.lastName()}`;
      businesses.push(businessObj);
      counter++;
    }
    console.log('businesses: ', counter - 1);
    console.log(businesses[businesses.length - 1]);
  }
  console.log('Finished creating businesses array')
  return businesses;
}

// businessNames();

module.exports = { businessNames };