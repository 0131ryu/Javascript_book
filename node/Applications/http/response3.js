const fs = require("fs");
const http = require("http");

http
  .createServer((request, respone) => {
    fs.readFile("./node/xmas.jpg", (error, data) => { //출력되는 html이 js보다 상위 폴더에 있을 것
      respone.writeHead(200, { "Content-Type": "image/jpeg" });
      respone.end(data);
    });
  })
  .listen(50000, () => {
    console.log("서버가 동작 중입니다. http://127.0.0.1:50000");
  });

http.createServer((request, response) => {
    fs.readFile('./node/free_music_moonshot(tubebackr).mp3', (error, data) => {
        response.writeHead(200,  { "Content-Type": "audio/mp3" });
        response.end(data);
    });
}).listen(50001, () => {
    console.log("서버가 동작 중입니다. http://127.0.0.1:50001");
})