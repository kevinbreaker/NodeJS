module.exports.startChat = (aplicacao, req, res)=>{

   let dadosForm = req.body; // req(envio das informações), enviando formulario.
   								// e body(middleware) popula essa propriedade dentro do request.
   req.assert('nickname','Nome é obrigatório!!!').notEmpty()
	req.assert('nickname','Nome deve conter entre 3 e 20 caracteres').len(3,20) 	
 	
	let erros = req.validationErrors() // pega os erros do assert

 	if(erros){   // Caso haja erro faça...
		res.render('index', {validacao : erros});
		return; // << Pra nao continuar o codigo caso haja erro
 	}
 	
	aplicacao.get('SocIO').emit(
	'msgParaCliente',
	{nickname : dadosForm.nickname, mensagem : 'Acabou de entrar no chat'}
	)
 	
 	
	res.render('chat',{dadosForm : dadosForm})

}