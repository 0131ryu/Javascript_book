//터미널 : node node_review/web_review/main.js
//localhost:3000

var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    var title = queryData.id;
    if(_url == '/') {
        title = 'Welcome';
    }
    if(_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`node_review/web_review/data/${queryData.id}`, 'utf8', function(err, description) {
        var template = `
        <!doctype html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                <ul>
                    <li><a href="/?id=korea">한국</a></li>
                    <li><a href="/?id=japan">일본</a></li>
                    <li><a href="/?id=chinese">중국</a></li>
                </ul>
                <h2>${title}</h2>
                <p>${description}</p>
            </body>
        </html>
        `;
        response.end(template);
    });
});

app.listen(3000);