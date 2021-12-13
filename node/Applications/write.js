var fs = require('fs');

var data = 'fs.writeFile test';

fs.writeFile('./node/Applications/text1.txt', data, 'utf8', function(err) {
    console.log('비동기적 파일쓰기 완료');
})

fs.writeFileSync('./node/Applications/text2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');

const fs2 = require('fs');

const contents = 'hello this is test!';
fs.writeFile('./node/Applications/message.txt', contents, 'utf-8', function(error) {
    console.log('write end!');
});