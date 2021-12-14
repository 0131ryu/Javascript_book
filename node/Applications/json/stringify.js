const fs = require('fs');

const userList = [
    {name: 'newt', age: 31},
    {name: 'tina', age: 31}
]

fs.writeFile('./node/Applications/json/list.json', JSON.stringify(userList), function(error) {
    console.log('write end!');
});