module.exports = (aplicacao)=>{
	
	aplicacao.get('/',(req,res)=>{
		aplicacao.app.controllers.index.home(aplicacao, req, res);
	});
}