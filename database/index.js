const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'secret',
  database: 'wonder4'
});



connection.connect((err) => {
  if (err) {
    console.log('error connecting mysql')
  } else {
    console.log('successfully connect to mysql')
  }
})

module.exports =  connection;