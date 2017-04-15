// Importar configurações do servidor!
let aplicacao = require('./config/server');

// Parametrizar a porta de escuta.

let server = aplicacao.listen(8080,()=>{
	console.log('Servidor online')
});

let io = require('socket.io').listen(server); // socketio escutara na porta do server
//tanto requisições http quanto websocket, atuarão na msm porta.

aplicacao.set('SocIO',io); //usando express pra usar como variavel global. obs:nao usar nomes pre-definidos em var.globais.

//criar conexão por websocket
io.on('connection',(socket)=>{ //escutando eventos de conexão. on ('nome do evento', 'função de callback quando a instancia é chamada') on ta no servidor e cliente.
									// ( connection é um evento padrão, pre-definido que é pesquisado no servidor quando uma tentativa de conexão é feita do lado do cliente)
	console.log('usuario logado');
	socket.on('disconnect',(socket)=>{
		
		console.log('Usuario desconectou');
	});
	
	socket.on('msgParaServidor',(data)=>{ // só pra gente, que a mensagem será impressa
		socket.emit(
			'msgParaCliente',
			{nickname: data.nickname, mensagem: data.mensagem}
			)
		})
			
		socket.broadcast.on('msgParaServidor',(data)=>{ // Para aparecer pra todos os usuários menos para nós.
		socket.emit(
			'msgParaCliente',
			{nickname: data.nickname, mensagem: data.mensagem}
			)
	});
});