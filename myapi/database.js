const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'aavt4c4b',
  database: 'tvt20spl'
});
module.exports = connection;