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
	//### Criando variaveis para usar recursos da classe e banco para autenticar ##
	let connection = aplicacao.config.dbConnection;
	let UsuariosDAO = new aplicacao.app.models.UsuariosDAO(connection);
	
	UsuariosDAO.autenticar(dadosAutentic,req,res); // Passando o usuario e senha.
	

	
}