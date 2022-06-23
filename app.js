const http = require('http')
http.createServer( function(req,res) {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end('Hello World')
}).listen(5000, '127.0.0.1')

console.log('Server running at 5000')