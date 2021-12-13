const fs = require('fs');

fs.readFile('./node_review/Applications_test/info.txt', (err, data) => {
    if(err) throw err;
    console.log('[2021년 하반기 코로나 환자 수 확인]');
    console.log(data.toString());
})