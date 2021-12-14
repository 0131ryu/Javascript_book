const fs = require('fs');

fs.readFile('./node/Applications/message.txt', (err, data) => {
    if(err) throw err;
    let contents = data.toString();
    contents = 'replaced test file';
    fs.writeFile('./node/Applications/message.txt', contents, 'utf-8', function(error) {
        console.log('replace end!');
    });
})