var http = require('http'); // require importa um módulo ou biblioteca para incorpora outros arquivos ou páginas ao script.Neste caso importando a biblioteca HTTP.

var server = http.createServer( function(req, res){  //Este método espera um argumento,que no meu caso será req(requisição) e res(resposta), assim podendo trabalhar dentro do servidor.

	res.end("<html><body>Portal de noticias</body></html>");
});

server.listen(3000); // método listen, serve pra escutar, verificar oque esta sendo requisitado na porta escolhida.


