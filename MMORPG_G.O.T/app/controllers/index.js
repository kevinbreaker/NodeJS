module.exports.home = (aplicacao,req,res)=>{
	res.render('index',{validacao : {},dadosAutentic : {} }) // renderiza a pagina index

}

module.exports.autenticar = (aplicacao, req, res)=>{
	let dadosAutentic = req.body;
	
	req.assert('usuario',"Nome deve ser preenchido").notEmpty();
	req.assert('senha',"Senha deve ser preenchida").notEmpty();
	
	let erros = req.validationErrors();
	
	if(erros){
		res.render("index",{validacao : erros, dadosAutentic : dadosAutentic});
		return;
	}
	res.send('Oi');
	
}