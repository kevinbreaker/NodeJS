module.exports = (aplicacao)=>{
	aplicacao.get('/cadastro',(req,res)=>{
		res.render('cadastro');	
	});

}