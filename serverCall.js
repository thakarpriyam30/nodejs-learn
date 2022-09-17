var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write(req.url)
  res.end('<h1>Hello World</h1>');
  }).listen(8081)
console.log('server is running')