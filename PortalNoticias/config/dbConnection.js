var mysql = require('mysql'); // a variavel mysql, vai importar/require, o módulo mysql.
			//	(que esta dentro do node_modules) para conexão com banco de dados mysql.
module.exports = function () {
	return  mysql.createConnection({ //variavel connection, recebe uma função do modulo mysql( createConnection);
													// para fazer conexão com o banco, obs: os parametros dentro dele, são em estrutura Json.
													
		host : 'localhost', // <- estrutura jason. host é o endereço, no caso do probjeto será local.
		user : 'root',
		password : 'kevin',
		database : 'portal_noticias' 
																		
	 	}); //feita a conexão(com info do BD)
}