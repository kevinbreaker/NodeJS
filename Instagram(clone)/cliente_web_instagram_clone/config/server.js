// ##### IMPORTANDO OS MÓDULOS NECESSÁRIOS ###
let express = require('express');  // Importando o módulo express
	expressValidator = require('express-validator'), // Importando o módulo express-validator
	consign = require('consign'),  // Importando o módulo consign
	bodyParser = require('body-parser'), // Importando o módulo body-parser
	expressSession = require('express-session'), // Importando o módulo express-session
	objectid = require('mongodb').ObjectId,
	mongodb = require('mongodb');
	
	
let aplicacao = express(); // Inicia o objeto do express


// Setar as variáveis  view egine
aplicacao.set('view engine', 'ejs');
aplicacao.set('views','./app/views');


// ###### COFIGURANDO MIDDLEWARES ###
aplicacao.use(express.static('./app/public')); // configura o middleware express.static  
// configurar o middleware body-parser 
aplicacao.use(bodyParser.urlencoded({extended: true}));
aplicacao.use(bodyParser.json());
// configura o middleware express-validator
aplicacao.use(expressValidator());


// Efetua o autoload das rotas, models e controllers para dentro do objeto aplicacao
consign()
	.include('app/routes')
	.then('config/dbConnection.js')//Especificando o modulo pra nao entrar em loop e extensão pra não parecer com um diretorio
	.then('app/models')
	.then('app/controllers')
	.into(aplicacao);


// middleware que configura páginas de status 
aplicacao.use(function(req, res, next){
	res.status(404).render('errors/404');
	next();
});
// middleware que configura msgs de erro internos 
aplicacao.use(function(err, req, res, next){
	res.status(500).render('errors/500');
	next();
});	


//Exporta o objeto aplicacao
module.exports = aplicacao;