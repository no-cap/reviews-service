const cassandra = require('cassandra-driver');
const faker = require('faker');


const client = new cassandra.Client({
  contactPoints: ['172.31.30.164'],
  localDataCenter: 'datacenter1',
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