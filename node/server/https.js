//https://letsencrypt.org/에서 발급받거나 인증서를 구입해 키 파일을 준비해야 함
//http와 다른 점 : 브라우저 주소줄에 자물쇠 마크가 생김
//http: 클라이언트가 서버로 데이터 요청 시 서버는 그냥 전달
//https: 데이터를 요청하기 이전에 먼저 SSL을 통한 암호화된 통신 정보를 요청하고 해당 통신 채널의 안정성을 확인한 후 실제 데이터를 요청하고 전달
//암호화된 채널을 통해 전달되는 데이터 값들은 서버와 사용자 중간에서는 읽을 수도 수정도 불가 (도청, 감지 불가)

const https = require('https');
const fs = require('fs');

const options = {
    key : fs.readFileSync('test/fixrues/keys/agent2-key.pem'),
    cert : fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
};

https.createServer(option, (req, res) => {
    res.writeHead(200);
    res.end('hello world this is https test');
}).listen(8000);