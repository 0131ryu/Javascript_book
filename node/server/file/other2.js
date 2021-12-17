const fs = require('fs');

//디렉터리 생성

fs.mkdir('./node/server/file/tempdir', (e) => {
    if(e) {
        throw e;
    }
    //생성 후에 메세지를 화면에 출력함
    console.log('Create!', e);
});


//디렉터리 내 파일 목록 읽어오기

fs.readdir('./node/server/file/tempdir', (err, files) => {
    if(err) {
        throw err;
    }
    //생성 후에 메세지를 화면에 출력함
    console.log(files);
});

//디렉터리 삭제하기 -> 비어있지 않으면 오류 발생
fs.rmdir('./node/server/file/tempdir', (err, files) => {
    if(err) {
        throw err;
    }
    //생성 후에 메시지를 화면에 출력
    console.log(err);
});