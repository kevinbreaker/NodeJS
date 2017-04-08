var http = require('http'); // require importa um módulo ou biblioteca para incorpora outros arquivos ou páginas ao script.Neste caso importando a biblioteca HTTP.

var server = http.createServer( function(req, res){  //Este método espera um argumento,que no meu caso será req(requisição) e res(resposta), assim podendo trabalhar dentro do servidor.
	
	var categoria = req.url // request com atributo "url", recuperamos "localhost/3000/####" ### pra frente 
	
	if(categoria == '/tecnologia'){
		
		res.end("<html><body>Noticías de Tecnologia</body></html>");
	} else if (categoria == '/moda') {
		res.end("<html><body>Noticías de moda</body></html>");
				
	} else if (categoria == '/beleza') {
		res.end("<html><body>Noticías de beleza</body></html>");
				
	} else {
		res.end("<html><body>Portal de noticias</body></html>");
		
	}
});

server.listen(3000); // método listen, serve pra escutar, verificar oque esta sendo requisitado na porta escolhida.


