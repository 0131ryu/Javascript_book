const fs = require('fs');

const renameFile = (prevFileName, currentFileName) => {
    fs.rename(prevFileName, currentFileName, (err) => {
        if(err) console.log(`ERROR : ${err}`);
    });
};

const prevFileName = './node_review/json/america.txt'; //기존 파일 이름
const currentFileName = './node_review/json/south_america.txt';  //변경될 파일 이름

renameFile(prevFileName, currentFileName);