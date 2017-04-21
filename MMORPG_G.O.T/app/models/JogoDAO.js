function gameDAO (connection){
	this._connection = connection();

}

gameDAO.prototype.gerarParametros = function(dados){
	this._connection.open((erro,monJogo)=>{
		monJogo.collection("jogo",(erro,colecao)=>{
			colecao.insert({ // durante o cadastro, as moedas e suditos serão fixos pra todos,
								// porém habilidates serão geradas randomicamente pra cada usuario.
				usuario: dados, // Necessita receber o usuario, pra saber a qual pertence os dados.				
				moeda: 15,
				suditos: Math.floor(Math.random() * 1000), // gera numero randomico e inteiro até mil
				temor: Math.floor(Math.random() * 1000), // floor, transforma o numero fracionario em inteiro
				sabedoria: Math.floor(Math.random() * 1000), // random gera um numero entre 0 e 1
				comercio: Math.floor(Math.random() * 1000), // pra ajeitar isso, multiplico o numero por mil
				magia: Math.floor(Math.random() * 1000) // sai como : 0.43434343 = 434.34343+(floor)= 434.
			
			});
			
			monJogo.close();
		})
	})
}


module.exports = ()=> {
	return gameDAO;
}