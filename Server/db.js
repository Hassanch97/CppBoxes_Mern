const mysql = require('mysql2');
const {config} = require('./config');


const db = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

module.exports = db;
