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
	
	socket.on('msgParaServidor',(data)=>{ 
		//##### dialogo ###		
		socket.emit(		// só pra gente, que a mensagem será impressa
			'msgParaCliente',
			{nickname: data.nickname, mensagem: data.mensagem}
			)
		socket.broadcast.emit(	// Para aparecer pra todos os usuários menos para nós.
			'msgParaCliente',
			{nickname: data.nickname, mensagem: data.mensagem}
			)
			// **** participantes ****
		if(parseInt(data.apelido_att_cliente) == 0){
			socket.emit(		
				'ParticipanteClient',
				{nickname: data.nickname})
			
			socket.broadcast.emit(	
				'ParticipanteClient',
				{nickname: data.nickname})
		}
	});
});