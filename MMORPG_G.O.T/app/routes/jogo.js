module.exports = (aplicacao)=>{ 
	aplicacao.get('/jogo',(req,res)=>{
		res.render('jogo')	
	})
}