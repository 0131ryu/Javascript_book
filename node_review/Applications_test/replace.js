const fs = require('fs');

fs.readFile('./node_review/Applications_test/info.txt', (err, data) => {
    if(err) throw err;
    let contents = data.toString();
    contents = '2021년 12월 13일 코로나 확진자 수 : 5,817명';
    fs.writeFile('./node_review/Applications_test/info.txt', contents, 'utf-8', function(error) {
        console.log('replace end!');
    });
})