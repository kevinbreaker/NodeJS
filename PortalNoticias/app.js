var express = require('express'); // require importa um módulo ou biblioteca para incorpora outros arquivos ou páginas ao script.Neste caso importando o Express.
var aplicacao = express();

aplicacao.get('/', function (req,res) {
	res.send("<html><body>Portal de noticias</body></html>");

});

aplicacao.get('/tecnologia', function (req,res) {
	res.send("<html><body>Noticías de Tecnologia</body></html>");

});

aplicacao.get('/moda', function (req,res) {
	res.send("<html><body>Portal de noticias</body></html>");

});

aplicacao.listen(3000, function () {
	console.log("Servidor ON");

});