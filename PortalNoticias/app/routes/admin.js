module.exports = function (aplicacao) {

	aplicacao.get('/formulario_inclusao_noticia', function (req,res) {
		aplicacao.app.controllers.admin.formulario_inclusao_noticia(aplicacao, req, res);
	});
	
	aplicacao.post('/noticias/salvar', function (req,res) {
		aplicacao.app.controllers.admin.noticias_salvar(aplicacao,req,res);	
	});
}