const mysqlServer = require('mysql');

const connection = mysqlServer.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'restful_node'
});

const errorHandler = (error, msg, rejectFunction) => {
  console.log(error);
  rejectFunction({error: msg});
  return false;
}

const categoryModule = require('./categories')({ connection, errorHandler });
module.exports = {
  categories: () => categoryModule
};
