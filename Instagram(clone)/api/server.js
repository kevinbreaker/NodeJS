// #### IMPORTANTO MÓDULOS
let express = require('express'),
	bodyParser = require('body-parser'),
	mongodb = require('mongodb');

let aplicacao = express();

//Configuração body-parser - middlewares
aplicacao.use(bodyParser.urlencoded({extended : true}));
aplicacao.use(bodyParser.json());

// Escutando na porta 8080 (pq sim!)
let port = 8080;
aplicacao.listen(port);

// Estanciando e criando conexão com o bd
let db = new mongodb.Db(
	'instagram', // nome do banco
	new mongodb.Server('localhost',27018, {}),  // obj de conexão do banco
	{}
);

console.log("Servidor HTTP esta escutando na porta " + port);

aplicacao.get('/',(req,res)=>{
	res.send({msg : 'Olá world'});
})

// POST  (create)
aplicacao.post('/api',(req,res)=>{
	let dados = req.body;
	db.open(function(erro,mongoClient){
		mongoClient.collection('postagens',(erro,colecao)=>{
			colecao.insert(dados,(erro,result)=>{
				if(erro){
					res.json({'status': 'Erro!'});
				}else{
					res.json('status':'Inserido no banco com sucesso');
				}
				mongoClient.close();	
			});		
		})
	});
})