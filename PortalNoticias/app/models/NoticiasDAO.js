function NoticiasDAO(connection) { // classe :D (sim de orientação a objeto)
	this._connection = connection; // "_" convenção que indica que a variavel em questão pertence apenas dentro da classe. SIM É UMA FUNÇÃO!!
					//this. = são atributos que armazenam até Json e etc..
					// toda variavel que começa com underline, significa que faz parte do contexto da classe.
}				//prototype = permite acessar as propriedades da nossa função.
NoticiasDAO.prototype.getNoticias = function(callback){ // atraves do prototype, podemos acessar e criar propriedades pra nossas funções. 
	this._connection.query('SELECT * FROM noticias ORDER BY data_criacao', callback); 
	}		// armazena em propriedades até funções velho :D

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback); 
		
	}

NoticiasDAO.prototype.salvarNoticia = function(noticia,callback){
		this._connection.query('INSERT INTO noticias set ?', noticia, callback) 
	}							

NoticiasDAO.prototype.get5lastNoticias = function(callback){
	this._connection.query('SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5', callback);
	
}
	
module.exports = function () {
	/************** INUTILIZADO, POIS FOI FEITO UMA CLASSE (Orientação Objto) ACIMA,COM A MESMA FUNÇÃO ABAIXO(e melhr hehe).*****	
	  ******************LEIA A BAIXO OS COMENTARIOS, CASO TENHA ALGUMA DUVIDA SOBRE AS FUNÇÕES ACIMA******
	 // função dentro do contexto do módulo, que exporta uma função que permite uma função dentro dela.
	this.getNoticias = function(connection, callback){
		connection.query('SELECT * FROM noticias', callback);  //o render(callback da query) ficou como o callback aqui
	}
	
	this.getNoticia = function (connection, callback) {
		connection.query('select * from noticias where id_noticia = 2', callback); 
		
	}
	
	this.salvarNoticia = function(noticia, connection, callback){
		connection.query('INSERT INTO noticias set ?', noticia, callback) //passa o Json como paramentro pro query, pq o mySQL suporta o insert com informação set
	}									// o modulo mysql tem inteligencia pra pegar o Json e transformar em string e substituir aonde tiver "?"
				retun this;			// fundamental o Json possuir como rótulo das variáveis o mesmo nome que as colunas da tabela.
				***********************/
													
	return NoticiasDAO;

}