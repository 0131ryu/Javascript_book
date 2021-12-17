const fs = require('fs');
fs.writeFile('./node/server/file/test.txt', 'Hello World2', (err)=> { //간단하나 다양한 기능 제공 불가
    if(err) throw err;
    console.log('File Write Complete');
});