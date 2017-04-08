var aplicacao = require('./config/server'); // "./" Por esta no mesmo nivel da navegação de diretorio

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(aplicacao); // Quando se exporta uma função, não se excuta ela necessariamente, então é necessario executar, no meu caso colocando o paramentro aplicacao. 

var rotaHome = require('./app/routes/home')(aplicacao); // economizando linhas de codigos, executando uma função"()" e passando o meu parametro "aplicacao"


var rotaFormularioAddNoticia = require('./app/routes/formulario_inclusao_noticia')(aplicacao); // outra forma de executar a função, no padrão **commonJS**


aplicacao.listen(3000, function () { // escutando na porta 3000, e imprimindo no shell que esta rodando.
	console.log("Servidor rONdando");

});