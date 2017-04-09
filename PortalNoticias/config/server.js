var express = require('express'); // require importa um módulo ou biblioteca para incorpora outros arquivos ou páginas ao script.Neste caso importando o Express.
var consign = require('consign'); // consign é um modúlo que permite de forma simplificada incluir automaticamente diversos modulos, util por exemplo na rota

var aplicacao = express();
aplicacao.set('view engine', 'ejs'); // setou que a geração de views será com EJS
aplicacao.set('views', './app/views'); // apontando caminho das views para rotas.obs: como este é um modulo, ele esta no nivel do que utiliza este modulo, sendo assim app.

consign()		 //com include informa o diretorio que quer incluir, para que ele inclua atuomaticamente todos os requires. para disponibilizar mais faiclamnete
		.include('app/routes') // consign reconhece todos arquivos da pasta routes/, scaneia ele,pega todos os modulos e inclui dentro do servidor.
		.then('config/dbConnection.js')	 // then(), apos o include pode colocar outros modulos que serão incluidos dentro da aplicação
		.then('app/models') // carrega o autoload de todos os módulos do models.
		.into(aplicacao);			// quando o consign carrega o modulo, ele executa o que o modulo exporta se o modulo exporta função, ele executa ela #perigo pra loop.

module.exports = aplicacao;
