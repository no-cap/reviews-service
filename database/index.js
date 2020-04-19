const cassandra = require('cassandra-driver');
const faker = require('faker');


const client = new cassandra.Client({
  contactPoints: ['172.31.16.18', '172.31.19.12', '172.31.24.168'],
  localDataCenter: 'us-west',
  keyspace: 'nocap'
});

client.connect();

const getAllReviewsByBusiness = id => {
  return new Promise((resolve, reject) => {
    const param = [id];
    const query = 'select * from reviewsbybusiness where businessid = ?;'
    const options = {
      prepare: true,
    }

    client.execute(query, param, options)
    .then(response => {
      resolve(response);
    })
    .catch(error => {
      reject(error);
    })
  });
}

module.exports = { getAllReviewsByBusiness };