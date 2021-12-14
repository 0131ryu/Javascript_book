const FolerList = './node_review/Applications_test/';
const fs = require('fs');

fs.readdir(FolerList, function(err, filelist){  // 배열 형태로 출력
    console.log(filelist);
});

fs.readdir(FolerList, (err, filelist) => { // 하나의 데이터씩 나누어 출력
    filelist.forEach(file => {
        console.log(file);
    })

});