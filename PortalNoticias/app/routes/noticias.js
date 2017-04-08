module.exports = function (aplicacao) {
	
	aplicacao.get('/noticias', function (req,res) {
		var mysql = require('mysql'); // a variavel mysql, vai importar/require, o módulo mysql.
			//	(que esta dentro do node_modules) para conexão com banco de dados mysql.
	
		var connection = mysql.createConnection({ //variavel connection, recebe uma função do modulo mysql( createConnection);
													// para fazer conexão com o banco, obs: os parametros dentro dele, são em estrutura Json.
													
			host : 'localhost', // <- estrutura jason. host é o endereço, no caso do probjeto será local.
			user : 'root',
			password : 'kevin',
			database : 'portal_noticias' 
																		
		 	}); //feita a conexão(com info do BD)
			 
			connection.query('select * from noticias' ,function (erro, result){    // connection.query(<sql>, <func callback). sql é a consulta em si.
				res.send(result);	//response.send(envia apenas pra quem requisitou).	// função callback,oque vai ser feito apos a consulta ser realizada. 
			 																					     	//dentro do node funcionam muito com callback		  						
			});
	});
}