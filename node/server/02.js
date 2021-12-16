const http = require('http');

const server = http.createServer((req, res) => {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip);
    console.log(req.url);
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n' + JSON.stringify(res.headers, null, 4));
});

server.listen(80, (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Server running!!');
})