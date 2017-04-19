module.exports = (aplicacao)=>{
	aplicacao.get('/', (req, res)=>{
		aplicacao.app.controllers.index.home(aplicacao,req,res)// navega ate o controller index e exporta tudo pra função home
	});
	
	aplicacao.post('/autenticar',(req, res)=>{
		aplicacao.app.controllers.index.autenticar(aplicacao, req, res)
	});	
}