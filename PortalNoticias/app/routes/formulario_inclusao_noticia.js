module.exports = function (aplicacao) {

	aplicacao.get('/formulario_inclusao_noticia', function (req,res) {
		res.render("admin/form_add_noticia");

	});
}