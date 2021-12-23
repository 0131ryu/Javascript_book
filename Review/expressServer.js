var express = require('express')
var app = express();
var fs = require('fs');

app.listen(3003, function() {
    console.log('Server Start');
});

//라우팅 설정
app.get('/', function(req, res) {
    fs.readFile('./Review/coffeeShop.html', function(error, data) {
        if(error) {
            console.log(error);
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            // res.writeHead(200, {'Content-Type': 'text/css'});
            // res.writeHead(200, {'Content-Type': 'text/javascript'});
            // res.writeHead(200, {'Content-Type': 'image/jpeg'});
            // res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(data);
        }
    });
});