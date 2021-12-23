//중복되는 코드를 templateHTML 함수로 만들기

var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body) { //body가 title, description 받아옴
    return `
    <!doctype html>
        <html>
            <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
            </head>
            <body>
                <h1><a href="/">WEB</a></h1>
                ${list}
                ${body}
            </body>
        </html>
    `
}

function templateList(filelist) {
    var list = '<ul>';
      var i = 0;
      while(i < filelist.length) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`; //data 폴더 안의 값을 자동으로 가져옴, id 앞에 ? 붙이기
        i = i + 1;
      }  
      list = list + '</ul>';
      return list;
}

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    

    if(pathname === '/') { //홈 일 때
    if(queryData.id === undefined) {
      fs.readdir('./node/server/data', function(err, filelist) {
        var title = 'Welcome!';
      var description = 'Hello, Node.js!';

      var list = templateList(filelist);
      var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
      
      response.writeHead(200);
        response.end(template);
    });
      
  } else { //홈이 아닐 때
    fs.readdir('./node/server/data', function(err, filelist) {
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length) {
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`; //data 폴더 안의 값을 자동으로 가져옴, id 앞에 ? 붙이기
      i = i + 1;
    }  
    list = list + '</ul>';
    fs.readFile(`node/server/data/${queryData.id}`, 'utf8', function(err, description) {
      var title = queryData.id;
      var list = templateList(filelist);
      var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);
        response.writeHead(200);
        response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end('Not Found');
  }
});
app.listen(3000);