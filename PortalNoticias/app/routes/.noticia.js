

//####### ATENÇÃO APENAS APROVEITANDO COMENTARIO DO CODIGO, PRA ALGUM ENTENDIMENTO ###
 // MAS ARQUIVO JA INUTILIZADO !!!!!!!!!



/********************** INUTILIZADO,NOVO CAMINHO NOTICIAS.JS *****************************
//var dbConnection = require('../../config/dbConnection') // saindo de routes  para app/ e saindo de app para Porta/
//variavel acima não precisa ser mais criada, por causa do uso do consign =D

module.exports = function (aplicacao) {
	
	//var connection = dbConnection(); por causa do consign se tornou descenessario.
	
	aplicacao.get('/noticia', function (req,res) {
		
		var connection = aplicacao.config.dbConnection(); // pode acessar os modulos dessa forma, por causa do consign que carregou os modulos pra ca.	
								 							// connection fica aqui, pra ser executada apenas quando esta rota for acessada, assim executando a função.
		
		var noticiasModel = new aplicacao.app.models.NoticiasDAO(connection);
		
		noticiasModel.getNoticia(function(erro ,result) {		
			res.render("noticias/noticia", {noticia : result});	
		});
		/********* INUTILIZOU POR CAUSA DO MODEL *******
			connection.query('select * from noticias where id_noticia = 2' ,function (erro, result){    // connection.query(<sql>, <func callback). sql é a consulta em si.
				res.render("noticias/noticia",{noticia : result});	//response.render(envia pra view o valor que é o result).	// função callback,oque vai ser feito apos a consulta ser realizada. 
					});
					***********//*																						     	//dentro do node funcionam muito com callbacK	
	});
} 
********************************************/
