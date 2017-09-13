var http = require('http')


http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end('Hello World!')
}).listen(3081);

console.log('Server is running on localhost:3081')
