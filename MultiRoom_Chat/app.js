// Importar configurações do servidor!
let aplicacao = require('./config/server');

// Parametrizar a porta de escuta.

let server = aplicacao.listen(8080,()=>{
	console.log('Servidor online')
});

let io = require('socket.io').listen(server); // socketio escutara na porta do server
//tanto requisições http quanto websocket, atuarão na msm porta.

//criar conexão por websocket
io.on('connection',(socket)=>{ //escutando eventos de conexão. on ('nome do evento', 'função de callback quando a instancia é chamada') on ta no servidor e cliente.
									// ( connection é um evento padrão, pre-definido que é pesquisado no servidor quando uma tentativa de conexão é feita do lado do cliente)
	console.log('usuario logado');
	socket.on('disconnect',(socket)=>{
		console.log('Usuario desconectou');
	})
});