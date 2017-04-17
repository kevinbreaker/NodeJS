module.exports = (aplicacao)=>{
	aplicacao.get('/cadastro',(req,res)=>{ // define a rota /cadastro
		aplicacao.app.controllers.cadastro.cadastro(aplicacao,req,res) // exporta tudo pra o controller cadastro
	});

}