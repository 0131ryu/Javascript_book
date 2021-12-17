//다중작업 들어갈 경우 문제 커지는 경우 많음 -> Node.js에서는 stream 사용

//파일 모듈을 선언함
const fs = require('fs');
//data.txt라는 파일을 쓰기 위한 핸들을 연다
const fd = fs.createWriteStream('./node/server/file/data.txt', {flags: 'w'});

//파일 핸들이 생성되면 콜백을 반환함
fd.on('open', () => {
    //파일을 열고 data라고 기록함
    fd.write("Data");

    //파일을 닫는다
    fd.end(() => {
        //파일을 닫은 후 화면에 END 출력
        console.log("END");
    })
})