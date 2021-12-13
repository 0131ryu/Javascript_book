const fs = require('fs');

const list = [4954, 7174, 7102, 7022, 6977, 6689, 5817];

list.forEach(item => fs.appendFile('./node_review/Applications_test/todayInfo.txt', `12월 초 코로나 확진자 수 : ${item}\n`, function(error) {
    console.log('write end!');
}));