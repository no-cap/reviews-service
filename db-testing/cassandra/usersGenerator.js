const faker = require('faker');

let users = [];
let usernames = () => {
  let counter = 0;
  for (let i = 0; i < 5; i++) {
    for (let i = 0; i < 500000; i++) {
      let firstName = faker.name.firstName();
      let userObj = {};
      userObj.username = firstName + Math.floor(Math.random() * 4000);
      userObj.firstName = firstName;
      userObj.lastName = faker.name.lastName();
      userObj.cityState = faker.address.city() + ', ' + faker.address.stateAbbr();
      userObj.avatar = `https://i.pravatar.cc/150?img=${faker.random.number({ min: 1, max: 70 })}`;
      userObj.friends = faker.random.number({ min: 1, max: 2000 });
      userObj.photos = faker.random.number({ min: 1, max: 100 });
      users.push(userObj);
      counter++;
    }
    console.log('users: ', counter);
    console.log(users[users.length - 1]);
  }
  console.log('Finished creating users array')
  return users;
}

// usernames();

module.exports = { usernames };