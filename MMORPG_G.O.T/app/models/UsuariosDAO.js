function UsuariosDAO(connection){
	this._connection = connection();
}	

UsuariosDAO.prototype.inserirUsuario =function(usuario){
	this._connection.open(function(erro, mongoClient){	//abrir a conexão com servidor e conectar com o banco..
		mongoClient.collection("usuarios", function(erro, colecao){	//executar a collection.. e executa uma função pra manipulação
			colecao.insert(usuario);	
			mongoClient.close();// fechar conexão, para nao ficar varias abertas
		});
	});
}

UsuariosDAO.prototype.autenticar = function(userAutentic, req,res){
	this._connection.open((erro, mongoAutentic)=>{ // Abre a conexão com o banco
		mongoAutentic.collection("usuarios",(erro,colecao)=>{	//entra na collection "usuarios" e faz uma ação callback
			colecao.find({ usuario: {$eq: userAutentic.usuario}, senha: {$eq: userAutentic.senha} }).toArray((erro,result)=>{	//encontrando no banco os registros de tal usuario.
																											// OBS: se pode omitir o $eq, por o Json ter a msm chave, sendo chave e valor.
					if (result[0] != undefined) { //Se o resultado for diferente de indefinido (isto é, se achar no banco o registro).
						
						req.session.autorizado = true; // inicia variavel de sessão, e diz que é verdadeira(existe enquanto o navegador ta aberto(mesmo mudando de rota))
						
						req.session.usuario = result[0].usuario; // recupera usuario (cookie)
						req.session.casa = result[0].casa;		//recupera a casa do usuario (cookie)
							
					}		
						
					if(req.session.autorizado){
						res.redirect("jogo");//Caso o usuario seja autorizado,redireciona pro jogo
					}else { 
						
						res.render("index",{validacao:{} });
					}															
																											
		})
																														
			mongoAutentic.close();		
		})
	});
}

module.exports = ()=>{

	return UsuariosDAO
}