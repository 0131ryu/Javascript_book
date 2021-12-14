const testFolder = './node/Applications/';
const fs = require('fs');

//기존 코드 부분
// const filenameList = fs.readFileSync(testFolder);

// filenameList.forEach((fileName) => {
//     console.log(fileName);
// })

fs.readdir(testFolder, function(err, filelist){  // 배열 형태로 출력
    console.log(filelist);
});

fs.readdir(testFolder, (err, filelist) => { // 하나의 데이터씩 나누어 출력
    filelist.forEach(file => {
        console.log(file);
    })

});