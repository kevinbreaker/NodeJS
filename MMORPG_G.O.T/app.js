let aplicacao = require('./config/server');// importa configurações do servidor

// parametrizar a porta de escuta
aplicacao.listen(8080,()=>{
	console.log('Servidor Online')
});