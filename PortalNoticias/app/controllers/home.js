module.exports.index = function(aplicacao,req,res) {
		
		var connection = aplicacao.config.dbConnection();// conexão com banco de dados.
		var noticiasModel = new aplicacao.app.models.NoticiasDAO(connection);
			
		noticiasModel.get5lastNoticias(function(erro,result){  //recuperar 5 ultimas noticias
			res.render("home/index",{noticias : result}); // render, permite json
						
		});
}