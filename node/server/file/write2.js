const fs = require('fs');

//test.txt 파일을 쓸 수 있게 핸들을 연다
fs.open('./node/server/file/test.txt', 'w', (err, fd)=> {
    //실패 시 err을 리턴, 성공 시 fd 리턴
    if(err) throw err;
    //파일에 쓰기를 수행합니다
    fs.write(fd, "hello world test2", (err, written) => {
        //실패 시 err 리천, 성공 시 기록된 바이트 수 리턴
        if(err) throw err;
        console.log(written + ' bytes Written');

        fs.close(fd, () => {
            console.log("Done");
        });
    });
});