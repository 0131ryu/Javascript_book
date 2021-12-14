const http = require('http');

http.createServer((request, response) => {
    //GET Cookie
    if(request.headers.cookie) {
        const cookie = request.headers.cookie.split(';').map((element) => {
            element = element.split('=');
            return {
                value1: element[0],
                value2: element[1],
                // value3: element[2],
                // value4: element[3]
            };
        });
        response.end(`<h1>${JSON.stringify(cookie)}</h1>`);
    } else {
        //SET Cookie
        response.writeHead(200, {
            'Content-Type': 'text/html',
            //color는 나오지 않고 taste는 cookie에서 이름은 안 붙고 값에만 나타남
            // 'Set-Cookie': ['area1 = jeju', 'many_things = mandarin', 'color: orange', 'taste: sour and sweet'] 
            'Set-Cookie': ['area1 = jeju', 'many_things = mandarin'] 
        });
        //cookie output
        response.end(`<h1>${'쿠키생성함'}</h1>`);
    }
}).listen(50000, () => {
    console.log('서버가 동작 중입니다. http://127.0.0.1:50000');
})