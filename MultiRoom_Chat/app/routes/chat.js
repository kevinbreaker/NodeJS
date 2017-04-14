module.exports = (aplicacao)=>{
	
	aplicacao.post('/chat',(req,res)=>{
		aplicacao.app.controllers.chat.startChat(aplicacao,req,res)
	});

	aplicacao.get('/chat',(req,res)=>{
		aplicacao.app.controllers.chat.startChat(aplicacao,req,res)
	});
}