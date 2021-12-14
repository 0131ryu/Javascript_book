const fs = require('fs');

const renameFile = (fromFilePathName, toFilePathName) => {
    fs.rename(fromFilePathName, toFilePathName, (err) => {
        if(err) console.log(`ERROR : ${err}`);
    });
};

const fromFilePathName = './node/Applications/json/hello.txt'; //기존 파일 이름
const toFilePathName = './node/Applications/json/bye.txt';  //변경될 파일 이름

renameFile(fromFilePathName, toFilePathName);