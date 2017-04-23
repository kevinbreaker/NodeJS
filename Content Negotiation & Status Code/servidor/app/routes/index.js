module.exports = (aplicacao)=>{
	aplicacao.get('/', (req, res)=>{
		res.send('Bem vindo a sua app NodeJS!');
	});
}