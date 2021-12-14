const fs = require("fs");
const http = require("http");

http
  .createServer((request, respone) => {
    fs.readFile("./node/example2.html", (error, data) => { //출력되는 html이 js보다 상위 폴더에 있을 것
      respone.writeHead(200, { "Content-Type": "text/html" });
      respone.end(data);
    });
  })
  .listen(50000, () => {
    console.log("서버가 동작 중입니다. http://127.0.0.1:50000");
  });
