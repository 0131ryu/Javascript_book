const fs = require('fs');

const dirName = `${__dirname}/vaccinated`;

if(!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
}