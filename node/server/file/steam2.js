const fs = require('fs');
//기록할 문자열 생성
let str = [];
for(let j=0; j<10000000; j++){
    str += '0123456789';
}

//파일을 쓸 핸들을 연다
const writeopen = fs.createWriteStream('./node/server/file/result2.txt', {flags: 'w'});
writeopen.on('open', (data) => {
    console.log("open", data);
    setTimeout(() => {
        console.log("Start");
        //루프를 돌면서 실제로 파일을 씁니다.
        for(let i=0; i<100; i++) {
            writeopen.write(str);
        }
        console.log("END2");
    }, 0);

    setTimeout(() => {
        //타이머에 의해 화면에 Test2 출력
        console.log('Test2');
    }, 10);

    //화면에 test1 출력
    console.log('Test1');

    setTimeout(() => {
        writeopen.end(() => {
            //파일을 닫습니다.
            console.log('File Close');
        });
    }, 10000);
});