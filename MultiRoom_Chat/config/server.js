// *****IMPORTAÇÕES DE MÓDULOS *****
// Importar o módulo do framework express
let express = require('express');
// Importar o módulo do consign
let consign = require('consign');
// Importar o módulo do body-parser
let bodyParser = require('body-parser');
// Importar o módulo do express-validator
let expressValidator = require('express-validator');
// **********************

// Iniciar o objeto do express
let aplicacao = express();

// Setar as variáveis 'view egine' e 'views' do express
aplicacao.set('view engine','ejs');
aplicacao.set('views','./app/views');

//####### CONFIGURAR OS MIDDLEWARES ####
// Configurar  middleware express.static
aplicacao.use(express.static('./app/public'));
// Configurar middleware body-parser
aplicacao.use(bodyParser.urlencoded({extended : true}));
// Configurar middleware express-validator
aplicacao.use(expressValidator());
//##########

// Efetua o autoload das rotas, models e controllers para o objeto aplicacao
consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(aplicacao);
//------------------

module.exports = aplicacao; // Exportar o objeto aplicacao
