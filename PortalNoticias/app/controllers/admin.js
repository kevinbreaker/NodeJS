module.exports.formulario_inclusao_noticia = function(aplicacao,req,res){
	res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});

}

module.exports.noticias_salvar = function(aplicacao, req,res){
	var noticia = req.body; //req= request.Quando enviamos informações via post, o express popula propriedade body do request.
		
		req.assert('titulo','Título é obrigatório').notEmpty(); //express-validator trata o req; notEmpty() não vazio.
		req.assert('resumo','Resumo é obrigatório').notEmpty();	//req agr tem uma propriedade que possui a função assert. passa ''o name do input ,e ''msg pq nao foi validada.
		req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);		
		req.assert('autor','autor é obrigatório').notEmpty();
		req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
		req.assert('noticia','Notícia é obrigatório').notEmpty();
		
		var erros = req.validationErrors();
		
		if(erros){
			res.render("admin/form_add_noticia",{validacao : erros, noticia : noticia});
			return;		
		}
		
		var connection = aplicacao.config.dbConnection(); // Conexão sendo feita	
		var noticiasModel = new aplicacao.app.models.NoticiasDAO(connection); // Model sendo recuperado // new por causa da classe.. instanciando modulo =D			 	
						 	
		noticiasModel.salvarNoticia(noticia,function(erro, result){ // Salvar Notícia. noticias, que cotém o Json que ta sendo recuperado do body no request. 
			res.redirect('/noticias');//redirect redireciona pra tal pagina (evitando f5..) // connection, que é a conexão e o function... que é o callback.	 
		});	

}