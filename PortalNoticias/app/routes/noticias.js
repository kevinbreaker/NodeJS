//var dbConnection = require('../../config/dbConnection') // saindo de routes  para app/ e saindo de app para Porta/
//variavel acima não precisa ser mais criada, por causa do uso do consign =D

module.exports = function (aplicacao) { 
	
	//var connection = dbConnection(); por causa do consign se tornou descenessario.
	
	aplicacao.get('/noticias', function (req,res) {
		
		var connection = aplicacao.config.dbConnection(); // pode acessar os modulos dessa forma, por causa do consign que carregou os modulos pra ca.	
						 							// connection fica aqui, pra ser executada apenas quando esta rota for acessada, assim executando a função.
		var noticiasModel = aplicacao.app.models.noticiasModel;			 	
						 	
		noticiasModel.getNoticias(connection, function(erro, result){   // callback agora vem pra ca.
			res.render("noticias/noticias",{noticias : result});	//response.render(envia pra view o valor que é o result).	// função callback,oque vai ser feito apos a consulta ser realizada. 
		});		
		//#### não há mais necessidade, por causa do model.																	 							
		//	connection.query('select * from noticias' ,function (erro, result){    // connection.query(<sql>, <func callback). sql é a consulta em si.
		//	res.render("noticias/noticias",{noticias : result});	//response.render(envia pra view o valor que é o result).	// função callback,oque vai ser feito apos a consulta ser realizada. 
		// ###############	 																															//dentro do node funcionam muito com callback		  						
			
	});
}
