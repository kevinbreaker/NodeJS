let http = require('http');	// importanto http nativo do node.

let opcoes = {
	hostname: 'localhost',
	port: 8080,
	path: '/',
	method: 'post',
	headers: {  // formas de "negociar"; formato pedido.
		'Accept' : 'application/json', // irá receber um json (por parte do servidor)
		'Content-type' : 'application/x-www-form-urlencoded'		
	}										// 'text/html' pra receber em html

}
//Content-type
let html = 'nome=Kevin'; // x-www-form-urlencoded


	
let buffer_corpo_response = [];	
	
// espera 2 parametros, 1º uma string ou json, 2º uma função de callback que recebe response
let req = http.request(opcoes, (res)=>{ // get do http, não do framework express!!!

	// aparti do on, é possivel identificar alguns estados da req.
	res.on('data',(pedaco)=>{ // data existe quando req esta em curso, e recebe pedços de info web
		buffer_corpo_response.push(pedaco); // entregue em buffer, bom comcatenar em uma string, pra entender.
	})
	res.on('end',()=>{ // função end é disparada quando o carregamento é finalizado
		let corpo_response = Buffer.concat(buffer_corpo_response).toString();
		console.log(corpo_response);
	})
	
	res.on('error',()=>{ // pra caso houver algum erro na requisição
		
	})
})

req.write(html); // anexa a informação/string, como sendo body do request
req.end();// envio, disparando a requisição
