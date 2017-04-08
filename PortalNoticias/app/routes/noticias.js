var dbConnection = require('../../config/dbConnection') // saindo de routes  para app/ e saindo de app para Porta/

module.exports = function (aplicacao) {
	
	var connection = dbConnection();
	
	aplicacao.get('/noticias', function (req,res) {
			 
			connection.query('select * from noticias' ,function (erro, result){    // connection.query(<sql>, <func callback). sql é a consulta em si.
				res.render("noticias/noticias",{noticias : result});	//response.render(envia pra view o valor que é o result).	// função callback,oque vai ser feito apos a consulta ser realizada. 
			 																																		     	//dentro do node funcionam muito com callback		  						
			});
	});
}