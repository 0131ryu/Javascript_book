//웹 서버 생성
const http = require('http');

const server = http.createServer();

//웹 서버 실행
server.listen(5000, () => {
    console.log('서버가 동작중입니다. http://127.0.0.1:50000');
});

//웹 서버 종료
const testClose = function() {
    server.close();
    console.log('서버가 종료되었습니다. http://127.0.0.1:50000');
}

//강제 서버 종료
setTimeout(testClose, 5000);