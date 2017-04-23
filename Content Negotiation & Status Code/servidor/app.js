// importar as configurações do servidor 
let aplicacao = require('./config/server');

// parametrizar a porta de escuta 
aplicacao.listen(8080,()=>{
	console.log('Servidor online');
})