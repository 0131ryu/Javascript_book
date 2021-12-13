var fs = require('fs');

const contents = '코로나 확진자수가 계속 증가세입니다.';
fs.writeFile('./node_review/Applications_test/Info.txt', contents, 'utf-8', function(error) {
    console.log('write end!');
});