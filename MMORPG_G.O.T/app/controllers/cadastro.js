module.exports.cadastro = (aplicacao,req,res)=>{ 
	res.render('cadastro',{validacao : {},dadosForm: {}})	 // redenriza a view cadastro

}

module.exports.cadastrar = (aplicacao,req,res)=>{
	
		let dadosForm = req.body
		
		req.assert("nome","Preencher o nome, campo Obrigátorio").notEmpty()
		req.assert("usuario","Preencher o usuário, campo Obrigátorio").notEmpty()
		req.assert("senha","Preencher a senha, campo Obrigátorio").notEmpty()
		req.assert("casa","Escolher a casa, campo Obrigátorio").notEmpty()
		
		let erro = req.validationErrors()
		
		if (erro) {
			res.render('cadastro',{validacao : erro,dadosForm: dadosForm});
			return;
		}
		res.send("ta tudo correto,relex")
	
}