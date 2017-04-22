module.exports.game = (aplicacao,req,res)=>{

	if(req.session.autorizado != true){  // Se não for autorizado(login não for sucedido)
		res.send("Usuário necessita se logar");	 // Mensagem de erro, pra logar
		return;
	} 
	// Caso permitido e login com sucesso....
	let connection = aplicacao.config.dbConnection;
	let jogoDAO = new aplicacao.app.models.JogoDAO(connection);
	
	let usuario = req.session.usuario;	
	let casa = req.session.casa;
	
	jogoDAO.startGame(res, usuario, casa); 
	
}

module.exports.sair = (aplicacao, req ,res)=>{
	
	req.session.destroy((erro)=>{ //destroi a sessão 
		res.render("index", {validacao: {} })	//Redireciona para index.
	})
}