// #### IMPORTANDO OS MÓDULOS ### 
let express = require('express');// importar o módulo do framework express
let consign = require('consign'); // importar o módulo do consign 
let bodyParser = require('body-parser');// importar o módulo do body-parser */
let expressValidator = require('express-validator'); // importar o módulo do express-validator 

// iniciar o objeto do express 
let aplicacao = express();

// setar as vartiáveis 'view engine' e 'views' do express 
aplicacao.set('view engine', 'ejs');
aplicacao.set('views', './app/views');

// configurar o middleware express.static 
aplicacao.use(express.static('./app/public'));

// configurar o middleware body-parser 
aplicacao.use(bodyParser.urlencoded({extended: true}));
aplicacao.use(bodyParser.json());
// configurar o middleware express-validator 
aplicacao.use(expressValidator());

// efetua o autoload das rotas, dos models e dos controllers para o objeto app 
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(aplicacao);

// exportar o objeto app 
module.exports = aplicacao;