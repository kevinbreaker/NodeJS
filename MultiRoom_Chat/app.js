// Importar configurações do servidor!
let aplicacao = require('./config/server');

// Parametrizar a porta de escuta.

aplicacao.listen(8080,()=>{
	console.log('Servidor online')
});