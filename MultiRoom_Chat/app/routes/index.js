module.exports = (aplicacao)=>{
	
	aplicacao.get('/',(req,res)=>{
		res.send('Teste')
	});
}