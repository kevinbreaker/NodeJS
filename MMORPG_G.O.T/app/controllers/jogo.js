module.exports.game = (aplicacao,req,res)=>{

	if(req.session.autorizado){ // se for autorizado (login)
		res.render('jogo'); //renderiza a pagina jogo
	} else{
		res.send("Usuário necessita se logar");	
	}
}