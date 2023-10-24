const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ja12031845.', 
  database: 'company_db' 
});

module.exports = connection;
