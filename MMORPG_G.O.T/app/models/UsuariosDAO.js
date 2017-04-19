function UsuariosDAO(connection){
	this._connection = connection();
}	

UsuariosDAO.prototype.inserirUsuario =function(usuario){
	this._connection.open(function(erro, mongoClient){	//abrir a conexão com servidor e conectar com o banco..
		mongoClient.collection("usuarios", function(erro, colecao){	//executar a collection.. e executa uma função pra manipulação
			colecao.insert(usuario);	
			console.log(usuario);
			mongoClient.close();// fechar conexão, para nao ficar varias abertas
		});
	});
}
module.exports = ()=>{

	return UsuariosDAO
}