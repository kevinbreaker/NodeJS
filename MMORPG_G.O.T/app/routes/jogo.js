module.exports = (aplicacao)=>{ 
	aplicacao.get('/jogo',(req,res)=>{
		aplicacao.app.controllers.jogo.game(aplicacao,req,res)
	})
}