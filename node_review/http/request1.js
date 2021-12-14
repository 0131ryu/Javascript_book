const fs = require('fs');
const http = require('http');
const url = require('url'); //request 내 url 속성을 이용해 페이지 구분하기

http.createServer((request, response) => {
    let pathname = url.parse(request.url);
    pathname = url.parse(request.url).pathname;

    if(pathname === '/') { //메인화면
        fs.readFile('./node_review/bootstrap_main.html', (error, data) => {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
            console.log(url.parse(request.url));
        });
    } else if(pathname === '/info') {
        fs.readFile('./node_review/bootstrap.html', (error, data) => {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
            console.log(url.parse(request.url));
        });
    }
}).listen(50000, () => {
    console.log('서버가 동작 중입니다. http://127.0.0.1:50000');
})