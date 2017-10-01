const mysqlServer = require('mysql');

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restful_node'
});

const categoryModule = require('./categories')({ connection });
module.exports = {
  categories: () => categoryModule
};
