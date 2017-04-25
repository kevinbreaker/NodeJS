let aplicacao = require('./config/server');// importa configurações do servidor

// parametrizar a porta de escuta
aplicacao.listen(80,()=>{
	console.log('Servidor Online')
});