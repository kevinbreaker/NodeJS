// IMPORTANDO O MONGODB
let mongo = require('mongodb');

let connMongoDB = ()=>{
	console.log("entrou  na funcao de conexao");	
	let db = new mongo.Db(			//  instancia da classe de conexão, espera 3 parametros
		'rpg_got',				// String do nome (nome do banco) 
		new mongo.Server(		// objeto de conexão com o servidor, parametro baisco da conexao, espera 3 parametros
			'localhost',  //String contendo o endereço do servidor do banco
			'27018',	//Porta de conexão do banco (padrão:27017, porém estou usando 27018)
			{}	//Objeto de opções do servidor (nao irei utilizar..então vai vazio)
		),
		{} // Objeto opcional de configuração						
	);
	return db;


}
	
module.exports = ()=>{		//exportando o modulo
	return connMongoDB;
}