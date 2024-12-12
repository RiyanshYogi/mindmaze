const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root123',
    database: 'mindmaze'
  });
  
  // Connect to the MySQL server
  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to the database:', error);
    } else {
      console.log('Connected to the database');
    }
  });

  module.exports = connection;


  // IF ERROR IS SHOWN LIKE Error connecting to the database: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
  // THEN USE RUN BELOW QUERY IN MYSQL
  // alter user 'root'@'localhost' identified with mysql_native_password by 'root123';
  