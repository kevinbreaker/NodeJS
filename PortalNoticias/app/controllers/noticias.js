module.exports.noticias = function(aplicacao,req,res){

	var connection = aplicacao.config.dbConnection(); // pode acessar os modulos dessa forma, por causa do consign que carregou os modulos pra ca.	
						 							// connection fica aqui, pra ser executada apenas quando esta rota for acessada, assim executando a função.
	var noticiasModel = new aplicacao.app.models.NoticiasDAO(connection);	// new por causa da classe ... vai abrir uma instancia deste módulo.		 	
					 	
	noticiasModel.getNoticias(function(erro, result){   // callback agora vem pra ca.
		res.render("noticias/noticias",{noticias : result});	//response.render(envia pra view o valor que é o result).	// função callback,oque vai ser feito apos a consulta ser realizada. 
	});	

}

module.exports.noticia = function(aplicacao,req,res){

	var connection = aplicacao.config.dbConnection(); // pode acessar os modulos dessa forma, por causa do consign que carregou os modulos pra ca.	
	var noticiasModel = new aplicacao.app.models.NoticiasDAO(connection);			// connection fica aqui, pra ser executada apenas quando esta rota for acessada, assim executando a função.
	
	var id_noticia= req.query; // pega os id da noticia da pagina
	
		
		
	noticiasModel.getNoticia(id_noticia, function(erro ,result) {		
	res.render("noticias/noticia", {noticia : result});	
	});

}