module.exports = (aplicacao)=>{
	aplicacao.get('/', (req, res)=>{
		
		res.format({ //formatos disponiveis para 'negociar' com a requisição do cliente
			html: function(){
				res.send('Bem vindo a sua app NodeJS!');		
			},
			json: function(){
				let retorno = {
					body: 'Bem vindo a sua app NodeJS'
				}		
				res.json(retorno);
			}
		});		
	});
}