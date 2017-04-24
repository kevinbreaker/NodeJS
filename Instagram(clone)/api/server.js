// #### IMPORTANTO MÓDULOS
let express = require('express'),
	bodyParser = require('body-parser'),
	mongodb = require('mongodb');

let aplicacao = express();

//Configuração body-parser
aplicacao.use(bodyParser.urlencoded({extended : true}));
aplicacao.use(bodyParser.json());

let port = 8080;
aplicacao.listen(port);

console.log("Servidor HTTP esta escutando na porta " + port);