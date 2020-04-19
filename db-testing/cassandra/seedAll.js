const cassandra = require('cassandra-driver');
const faker = require('faker');
const businesses = require('./businessesGenerator.js');
const users = require('./usersGenerator.js');
const client = new cassandra.Client({
  contactPoints: ['54.67.119.163', '13.56.182.173', '54.153.36.197'],
  localDataCenter: 'us-west',
  keyspace: 'nocap'
});

client.connect();
let usernamesArr = users.usernames();
let businessesArr = businesses.businessNames();

console.time('seed');
async function seed() {

  await client.execute('USE nocap;', (err, result) => {
    if (err) throw err;
  });

  const concurrency = 50;

  const promises = new Array(concurrency);
  const info = {
    total: 25000000,
    counter: 0
  };

  for (let i = 0; i < concurrency; i++) {
    promises[i] = queryFunc(info);
  };

  try {
    await Promise.all(promises);
    console.timeEnd('seed');
    console.log(`Finished executing ${info.total} queries with a concurrency level of ${concurrency}.`);
  } finally {
    await client.shutdown();
  }
}

async function queryFunc(info) {
  const restaurantQuery = 'INSERT INTO nocap.reviewsByBusiness (reviewId, date, businessId, businessName, rating, comment, userId, username, useful, funny, cool, firstName, lastName, cityState, avatar, friends, photos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const userQuery = 'INSERT INTO nocap.reviewsByUser (reviewId, date, businessId, businessName, rating, comment, userId, username, useful, funny, cool, firstName, lastName, cityState, avatar, friends, photos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const options = { prepare: true, isIdempotent: true };

  while (info.counter < info.total) {
    info.counter++;
    if (info.counter % 100000 === 0) {
      console.log(info.counter);
    }

    const user = usernamesArr[Math.floor(Math.random() * 2500000)];
    const business = businessesArr[Math.floor(Math.random() * 10000000)];

    const { userId, username, firstName, lastName, cityState, avatar, friends, photos } = user;
    const { businessId, businessName } = business;

    const params = [
      info.counter,
      faker.date.between('2016-01-01', '2020-04-07').toLocaleDateString(),
      businessId,
      businessName,
      faker.random.number({ min: 1, max: 5 }),
      faker.lorem.paragraph(2),
      userId,
      username,
      false,
      false,
      false,
      firstName,
      lastName,
      cityState,
      avatar,
      friends,
      photos
    ];

    await client.execute(restaurantQuery, params, options);
    await client.execute(userQuery, params, options);
  }
}

seed();

process.on('unhandledException', (reason) => { throw reason; });
// client.on('log', (level, loggerName, message, furtherInfo) => {
//   console.log(`${level} - ${loggerName}:  ${message}`);
// });