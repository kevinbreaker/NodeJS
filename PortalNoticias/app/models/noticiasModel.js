module.exports = function () {
	 // função dentro do contexto do módulo, que exporta uma função que permite uma função dentro dela.
	this.getNoticias = function(connection, callback){
		connection.query('SELECT * FROM noticias', callback);  //o render(callback da query) ficou como o callback aqui
	}
	
	this.getNoticia = function (connection, callback) {
		connection.query('select * from noticias where id_noticia = 2', callback); 
		
	}
			
	return this;

}