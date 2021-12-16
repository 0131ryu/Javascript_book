const http = require("http");

const port = 80;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plfain");
  res.end("This is TEST!\n");
});

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server running! 127.0.0.1");
});
