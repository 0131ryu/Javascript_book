const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('hello world! This is 04.js');
}).listen(8800, () => {
    console.log('Server listen started', new Date());
});

console.log("server running", new Date());