var express = require('express'); // require importa um módulo ou biblioteca para incorpora outros arquivos ou páginas ao script.Neste caso importando o Express.
var aplicacao = express();

aplicacao.set('view engine', 'ejs'); // setou que a geração de views será com EJS


aplicacao.get('/', function (req,res) {
	res.render("home/index");

});

aplicacao.get('/formulario_inclusao_noticia', function (req,res) {
	res.render("admin/form_add_noticia");

});

aplicacao.get('/noticias', function (req,res) {
	res.render("noticias/noticias");

});
aplicacao.listen(3000, function () {
	console.log("Servidor rONdando");

});