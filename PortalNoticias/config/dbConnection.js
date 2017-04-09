var mysql = require('mysql'); // a variavel mysql, vai importar/require, o módulo mysql.
			//	(que esta dentro do node_modules) para conexão com banco de dados mysql.

var connMySQL = function () { // por causa do consign, feita esta função para evitar que conecte com o banco toda hora.

	return  mysql.createConnection({ //variavel connection, recebe uma função do modulo mysql( createConnection);
													// para fazer conexão com o banco, obs: os parametros dentro dele, são em estrutura Json.
													
		host : 'localhost', // <- estrutura jason. host é o endereço, no caso do probjeto será local.
		user : 'root',
		password : 'kevin',
		database : 'portal_noticias' 
																		
	 	}); //feita a conexão(com info do BD)

}
module.exports = function () {
		return connMySQL; // evita que o autoload do consign execute direto, pois a conexão do bd esta dentro de uma variavel.
	
}