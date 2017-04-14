module.exports = (aplicacao)=>{
	
	aplicacao.post('/chat',(req,res)=>{
		res.render('chat');
	});

	aplicacao.get('/chat',(req,res)=>{
		res.render('chat');
	});
}