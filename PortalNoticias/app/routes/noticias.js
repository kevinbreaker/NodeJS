module.exports = function (aplicacao) {

	aplicacao.get('/noticias', function (req,res) {
		res.render("noticias/noticias");

	});
}