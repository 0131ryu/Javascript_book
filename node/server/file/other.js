const fs = require('fs');

//파일 삭제
fs.unlink('./node/server/file/result2.txt', () => {
    console.log('file unlinked');
});

//파일이동/이름 변경
fs.rename('./node/server/file/img1.jpg', './node/server/file/xmas.jpg', function() {
    console.log('File renamed');
});


//파일 정보 읽기
fs.stat('./node/server/file/xmas.jpg', (err, stats)=> {
    if(err) {
        console.log(err);
        return;
    }
    console.log(stats);
})