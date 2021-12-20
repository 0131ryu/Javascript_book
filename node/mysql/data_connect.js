var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port: '3306',
  user     : 'root',
  password : '12341234',
  database : 'jihye'
});

connection.connect();

connection.query('SELECT * FROM  products', function(err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end();