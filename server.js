var http = require('http');
var messages = ["howdy doo", "get out of here", "i am calling the police", "because living"];
var onRequest = function(req, res){
	if(req.method == 'GET'){
		res.writeHead(200, {
      'Connection': 'close',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
		res.end(JSON.stringify({message: messages[Math.floor(Math.random()*messages.length)]}));
	}
}

http.createServer(onRequest).listen(8887);