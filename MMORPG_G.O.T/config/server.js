// ##### IMPORTANDO OS MÓDULOS NECESSÁRIOS ###
let express = require('express');  // Importando o módulo express
let expressValidator = require('express-validator'); // Importando o módulo express-validator
let consign = require('consign');  // Importando o módulo consign
let bodyParser = require('body-parser'); // Importando o módulo body-parser

let aplicacao = express(); // Inicia o objeto do express

// Setar as variáveis  view egine
aplicacao.set('view engine', 'ejs');
aplicacao.set('views','./app/views');

aplicacao.use(express.static('./app/public')); // configura o middleware express.static 
																//(views acessaram os arquivos de midia, como se estivesse na raiz)
aplicacao.use(bodyParser.urlencoded({extended:true})); // configura o body-parser

aplicacao.use(expressValidator()); // configura o middleware express-validator

// Efetua o autoload das rotas, models e controllers para dentro do objeto aplicacao
consign()
	.include('app/routes')
	.then('config/dbConnection.js')//Especificando o modulo pra nao entrar em loop e extensão pra não parecer com um diretorio
	.then('app/models')
	.then('app/controllers')
	.into(aplicacao);
	
//Exporta o objeto aplicacao
module.exports = aplicacao;