require('http').createServer((request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('This is Test!!'); //웹에 글자 출력됨
}).listen(50000, () => {
    console.log('서버가 동작 중입니다. http://127.0.0.1:50000'); //계속 서버가 돌아감
})

