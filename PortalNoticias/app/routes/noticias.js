//var dbConnection = require('../../config/dbConnection') // saindo de routes  para app/ e saindo de app para Porta/
//variavel acima não precisa ser mais criada, por causa do uso do consign =D

module.exports = function (aplicacao) { 
	
	//var connection = dbConnection(); por causa do consign se tornou descenessario.
	
	aplicacao.get('/noticias', function (req,res) {
		 // ***** nova refatoração, agora no controllers *****
		
		aplicacao.app.controllers.noticias.noticias(aplicacao, req,res);//Executando a função do Codigo no controllers
		
		//#### não há mais necessidade, por causa do model.																	 							
		//	connection.query('select * from noticias' ,function (erro, result){    // connection.query(<sql>, <func callback). sql é a consulta em si.
		//	res.render("noticias/noticias",{noticias : result});	//response.render(envia pra view o valor que é o result).	// função callback,oque vai ser feito apos a consulta ser realizada. 
		// ###############	 																															//dentro do node funcionam muito com callback		  						
			
		aplicacao.get('/noticia', function (req,res) {
		
		aplicacao.app.controllers.noticias.noticia(aplicacao,req,res); //Executando a função dentro do controllers		
		
		});
	});
}
