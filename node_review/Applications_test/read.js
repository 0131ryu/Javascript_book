const fs = require('fs');

const data = fs.readFileSync("./node_review/Applications_test/info.txt");
const string = data.toString();
console.log('현재의 대한민국 코로나 상황');
console.log(string);