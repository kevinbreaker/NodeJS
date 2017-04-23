let http = require('http');	// importanto http nativo do node.
	
let buffer_corpo_response = [];	
	
// espera 2 parametros, 1º uma string ou json, 2º uma função de callback que recebe response
http.get('http://localhost:8080', (res)=>{ // get do http, não do framework express!!!

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