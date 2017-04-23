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

gameDAO.prototype.startGame = function(res, usuario, casa,msg){
	this._connection.open((erro,monGame)=>{
		monGame.collection("jogo",(erro,colecao)=>{
			colecao.find({ usuario: usuario }).toArray((erro,result)=>{
				
				res.render('jogo', { img_casa: casa, jogo: result[0],msg: msg }); // Caso permitido(login com sucesso), inicia o jogo do usuário.
				monGame.close();						
			})		
		})	
	})
}

gameDAO.prototype.acao = function(acao){
	this._connection.open((erro,monacao)=>{
		monacao.collection("acao",(erro,colecao)=>{
			
			let date = new Date();
			let tempo = null;
			
			switch(parseInt(acao.acao)) {
				case 1: tempo = 1 * 60 * 60000; break;
				case 2: tempo = 2 * 60 * 60000; break;
				case 3: tempo = 5 * 60 * 60000; break;
				case 5: tempo = 5 * 60 * 60000; break;			
			}
						
			acao.acao_temina_em = date.getTime()+ tempo;
			colecao.insert(acao);
			
			
		})	
		monacao.collection("jogo",(erro,colecao)=>{
			
			let moedas = null;
			switch(parseInt(acao.acao)) {
				case 1: moedas = -2 * acao.quantidade; break;
				case 2: moedas = -3 * acao.quantidade; break;
				case 3: moedas = -1 * acao.quantidade; break;
				case 5: moedas = -1 * acao.quantidade; break;			
			}
			
			colecao.update(
				{usuario : acao.usuario},
				{$inc: {moeda: moedas}} // inc = decrementa (moeda - moedas)
				);
				monacao.close();
			});		
	})
}

gameDAO.prototype.getAcoes = function(usuario,res){
	this._connection.open((erro,monAcao)=>{
		monAcao.collection("acao",(erro,colecao)=>{
			
			let date = new Date();
			let momento_atual = date.getTime();
			
			colecao.find({usuario: usuario, acao_temina_em: {$gt: momento_atual} }).toArray((erro,result)=>{
			
			res.render("pergaminhos", {acoes : result })
			monAcao.close();
			})
		})	
	})	
}	

module.exports = ()=> {
	return gameDAO;
}