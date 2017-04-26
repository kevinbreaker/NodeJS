// #### IMPORTANTO MÓDULOS
let express = require('express'),
	bodyParser = require('body-parser'),
	multiparty = require('connect-multiparty'),
	fileSystem = require('fs'), // capacidade manipular arquivo dentro da aplicação
	mv = require('mv'), // Por causa das permissões do linux, precisei usar este, mas igual o de cima.
	objectid = require('mongodb').ObjectId,
	mongodb = require('mongodb');

let aplicacao = express();

//Configuração body-parser - middlewares
aplicacao.use(bodyParser.urlencoded({extended : true}));
aplicacao.use(bodyParser.json());
aplicacao.use(multiparty());

aplicacao.use(function(req,res,next){

	res.setHeader("Access-Control-Allow-Origin","*"); 
	res.setHeader("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
	res.setHeader("Access-Control-Allow-Headers","content-type");
	res.setHeader("Access-Control-Allow-Credentials",true);
	
	next();
});
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
	
	let date = new Date();
	time_stamp =  date.getTime();
	
	//Permitindo que o cliente via codigo possa usar o post
	//res.setHeader("Access-Control-Allow-Origin","*");// 1º parametro- propriedade do hear que quer setar, 2º param lugar 
																// pra permitir apenas certo lugar ex: http://localgost:8081
	 let url_imagem =  time_stamp + '_' + req.files.arquivo.originalFilename;	 // nome da imagem	 
	 let pathOrigem = req.files.arquivo.path;
	 let pathDestino = './uploads/' + url_imagem; // destino mais o nome original.
	 
	 mv(pathOrigem,pathDestino,(erro)=>{ 
	 	    if (erro){
	 	    	res.status(500).json({error : erro});	
	 	     }
				console.log('movido!!');
			});
	 	let dados = {
			url_imagem: url_imagem,
			titulo: req.body.titulo	 	
	 	}
	  db.open(function(erro,mongoClient){
		mongoClient.collection('postagens',(erro,colecao)=>{
			colecao.insert(dados,(erro,result)=>{
				if(erro){
					res.json({'status': 'Erro!'});
				}else{
					res.json({'status':'Inserido no banco com sucesso'});
				}
				mongoClient.close();	
			});		
		})
	}); 
})

// GET (read)
aplicacao.get('/api',(req,res)=>{
	
	db.open(function(erro,mongoClient){
		mongoClient.collection('postagens',(erro,colecao)=>{
			colecao.find().toArray((erro,result)=>{
				if(erro){
					res.json(erro);
				}else{
					res.json(result);				
				}
				mongoClient.close();
			})		
		})	
	});
})
// GET by ID(read)
aplicacao.get('/api/:id',(req,res)=>{
	db.open(function(erro,mongoClient){
		mongoClient.collection('postagens',(erro,colecao)=>{
			colecao.find(objectid(req.params.id)).toArray((erro,result)=>{
				if(erro){
					res.status(404).json(erro);
				}else{
					res.json(result);				
				}
				mongoClient.close();
			})		
		})	
	});
})

aplicacao.get('/imagens/:imagem',(req,res)=>{

	let img = req.params.imagem;
	
	fileSystem.readFile('./uploads/'+img,(erro,conteudo)=>{
		if(erro){
			res.status(400).json(erro);
			return;		
		}
			res.writeHead(200, {'content-type':'image/jpg'});			
			res.end(conteudo); // end = pega uma determinada informação e escreve dentro do response	})
	})
})

// PUT by ID(update)
aplicacao.put('/api/:id',(req,res)=>{
	db.open(function(erro,mongoClient){
		mongoClient.collection('postagens',(erro,colecao)=>{
			colecao.update(
				{_id: objectid(req.params.id)}, // query
				{ $push: {
							comentarios: {
								id_comentario : new objectid(),
								comentario: req.body.comentario								
								}
							}
				},
				{},
				(erro,result)=>{
					if (erro) {
						res.json(erro);
					}else{
						res.json(result);
					}
					mongoClient.close();
				}
			);	
		})
	});		
})	

// DELETE by ID(remove)
aplicacao.delete('/api/:id',(req,res)=>{
	db.open(function(erro,monCli){
		monCli.collection('postagens',(erro,colecao)=>{
			colecao.update(
			{},
			{$pull: {
						comentarios: {id_comentario : objectid(req.params.id)}			
					  }
			},
			{multi:true},
			
			(erro,result)=>{
				if(erro){
					res.json(erro);
				}else{
					res.json(result);				
				}
				monCli.close();
			})
		})
	});	
})

