let mysql = require('mysql');
//conexão
function createDBConnection (){
  console.log('Conexão com banco bem sucedida.');
   return mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'kevin',
     database: 'casadocodigo'
  });
}
// wrapper
module.exports = ()=>{
  return createDBConnection;
}
