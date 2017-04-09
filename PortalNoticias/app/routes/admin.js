module.exports = function (aplicacao) {

	aplicacao.get('/formulario_inclusao_noticia', function (req,res) {
		res.render("admin/form_add_noticia");

	});
	
		aplicacao.post('/noticias/salvar', function (req,res) {
		var noticia = req.body; //req= request.Quando enviamos informações via post, o express popula propriedade body do request.
		
		var connection = aplicacao.config.dbConnection(); // Conexão sendo feita	
		var noticiasModel = new aplicacao.app.models.NoticiasDAO(connection); // Model sendo recuperado // new por causa da classe.. instanciando modulo =D			 	
						 	
		noticiasModel.salvarNoticia(noticia,function(erro, result){ // Salvar Notícia. noticias, que cotém o Json que ta sendo recuperado do body no request. 
			res.redirect('/noticias');//redirect redireciona pra tal pagina (evitando f5..) // connection, que é a conexão e o function... que é o callback.	 
		});	
		
	
	});
}