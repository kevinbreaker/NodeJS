module.exports.game = (aplicacao,req,res)=>{

	if(req.session.autorizado != true){  // Se não for autorizado(login não for sucedido)
		res.send("Usuário necessita se logar");	 // Mensagem de erro, pra logar
		return;
	} 
	
	let msg = '';
	if(req.query.msg != ''){
		msg = req.query.msg;
	}	
	
	// Caso permitido e login com sucesso....
	let connection = aplicacao.config.dbConnection;
	let jogoDAO = new aplicacao.app.models.JogoDAO(connection);
	
	let usuario = req.session.usuario;	
	let casa = req.session.casa;
	
	jogoDAO.startGame(res, usuario, casa,msg); 
	
}

module.exports.sair = (aplicacao, req ,res)=>{
	
	req.session.destroy((erro)=>{ //destroi a sessão 
		res.render("index", {validacao: {} })	//Redireciona para index.
	})

}

module.exports.suditos = (aplicacao,req,res)=>{
	if(req.session.autorizado != true){  // Se não for autorizado(login não for sucedido)
		res.send("Usuário necessita se logar");	 // Mensagem de erro, pra logar
		return;
	} 
	res.render("aldeoes",{validacao: {} })

}

module.exports.pergaminhos = (aplicacao,req,res)=>{
	if(req.session.autorizado != true){  // Se não for autorizado(login não for sucedido)
		res.send("Usuário necessita se logar");	 // Mensagem de erro, pra logar
		return;
	} 
	
	//## recuperar acoes inseridas no banco de dados.
	let connection = aplicacao.config.dbConnection;
	let jogoDAO = new aplicacao.app.models.JogoDAO(connection);
	let usuario = req.session.usuario;
	
	jogoDAO.getAcoes(usuario,res);
		
}

module.exports.sudi_acao = (aplicacao,req,res)=>{
	if(req.session.autorizado != true){  // Se não for autorizado(login não for sucedido)
		res.send("Usuário necessita se logar");	 // Mensagem de erro, pra logar
		return;
	} 	
	let dadosForm = req.body;
	
	req.assert('acao','Ação deve ser informada!').notEmpty();
	req.assert('quantidade',"Quantidade deve ser informada!").notEmpty();
	
	let erro = req.validationErrors();
	
	if(erro){
		console.log(erro);		
		res.redirect("jogo?msg=A"); // A = erro  B = sem erro
		return;
		
	}
	
	let connection = aplicacao.config.dbConnection;
	let jogoDAO = new aplicacao.app.models.JogoDAO(connection);
	dadosForm.usuario = req.session.usuario;
	
	jogoDAO.acao(dadosForm);
	res.redirect("jogo?msg=B");
}