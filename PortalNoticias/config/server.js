var express = require('express'); // require importa um módulo ou biblioteca para incorpora outros arquivos ou páginas ao script.Neste caso importando o Express.
var consign = require('consign'); // consign é um modúlo que permite de forma simplificada incluir automaticamente diversos modulos, util por exemplo na rota
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var aplicacao = express();
aplicacao.set('view engine', 'ejs'); // setou que a geração de views será com EJS
aplicacao.set('views', './app/views'); // apontando caminho das views para rotas.obs: como este é um modulo, ele esta no nivel do que utiliza este modulo, sendo assim app.

aplicacao.use(bodyParser.urlencoded({extended: true})); // modulo que atua na requisição e resposta
									// por ser middleware, precisa ficar antes dos includes dos modulos
									//urlencoded = entender como tratar url de formulario. extended : permite atraves de json implemetação de url codificada, em forma de url. 
aplicacao.use(expressValidator());  // outro middleware. faz validações, caso não valido, popula o body com erro.
aplicacao.use(express.static('./app/public')); // Acessa tudo que ta dentro do *PUBLIB/* sem necessidade de informar todo o caminho, como estivesse na raiz.
													// Assim as views, não precisam da informação de todo o percuso, apenas da raiz( que é oque o express.static() esta fazendo.)  


consign()		 //com include informa o diretorio que quer incluir, para que ele inclua atuomaticamente todos os requires. para disponibilizar mais faiclamnete
		.include('app/routes') // consign reconhece todos arquivos da pasta routes/, scaneia ele,pega todos os modulos e inclui dentro do servidor.
		.then('config/dbConnection.js')	 // then(), apos o include pode colocar outros modulos que serão incluidos dentro da aplicação
		.then('app/models') // carrega o autoload de todos os módulos do models.
		.then('app/controllers')
		.into(aplicacao);			// quando o consign carrega o modulo, ele executa o que o modulo exporta se o modulo exporta função, ele executa ela #perigo pra loop.

module.exports = aplicacao;
