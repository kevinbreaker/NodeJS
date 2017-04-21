module.exports = (aplicacao)=>{ 
	aplicacao.get('/jogo',(req,res)=>{
		aplicacao.app.controllers.jogo.game(aplicacao,req,res)
	})
	
	aplicacao.get('/sair',(req,res)=>{
		aplicacao.app.controllers.jogo.sair(aplicacao,req,res)
	})
}