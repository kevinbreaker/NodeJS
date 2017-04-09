module.exports = function (aplicacao) {
	
	aplicacao.get('/', function (req,res) {
		aplicacao.app.controllers.home.index(aplicacao,req,res);	
	});

}