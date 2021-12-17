const https = require('https');

//가져온 데이터를 담는 변수 선언
let CrawlData = [ { title: 'File System', link: 'fs.json', method: []}];

const url = "https://nodejs.org/docs/latest-v5.x/api/";
//해당 YRL에서 데이터 갖고오기
https.get(url + CrawlData[0].link, (res)=> {
    let body = '';
    res.on('data', (d) => {
        body += d;
    });
    res.on('end', () => {
        //가져온 데이터를 JSON Object 형태로 변환하여 저장
        let index_data = JSON.parse(body).modules[0].methods;

        //루프를 돌면서 메서드를 하나씩 확인
        for(let i=0; i<index_data.length; i++) {
            //개별 메서드에 대해서 필요한 만큼의 데이터를 읽어서 저장
            CrawlData[0].method.push({
                textRaw: index_data[i].textRaw,
                desc: index_data[i].desc,
                signatures: index_data[i].signatures
            });
        }
        //화면에 출력합니다.
        console.log(CrawlData);
    });
}).on('error', (e) => {
    console.log("Error: ", e);
})