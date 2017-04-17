module.exports = (aplicacao)=>{
	aplicacao.get('/', (req, res)=>{
		res.render('index')
	});
}