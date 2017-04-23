module.exports = (aplicacao)=>{ 
	aplicacao.get('/jogo',(req,res)=>{
		aplicacao.app.controllers.jogo.game(aplicacao,req,res)
	})
	
	aplicacao.get('/sair',(req,res)=>{
		aplicacao.app.controllers.jogo.sair(aplicacao,req,res)
	})
	aplicacao.get('/suditos',(req,res)=>{
		aplicacao.app.controllers.jogo.suditos(aplicacao,req,res)	
	})
	aplicacao.get('/pergaminhos',(req,res)=>{
		aplicacao.app.controllers.jogo.pergaminhos(aplicacao,req,res)	
	})

	aplicacao.post('/ordenar_acao_suditos',(req,res)=>{
		aplicacao.app.controllers.jogo.sudi_acao(aplicacao,req,res)	
	})
}