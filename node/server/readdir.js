var testFolder = './node/server/data';
var fs = require('fs');

fs.readdir(testFolder, function(err, filelist) {
    console.log(filelist); //['CSS', 'HTML', "Javascript"]
});