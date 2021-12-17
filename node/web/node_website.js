const https = require("https");

//가져온 데이터를 담는 변수를 선언
let CrawlData = [];

//해당 URL에서 데이처를 가죠옴
https
  .get("https://nodejs.org/docs/latest-v5.x/api/index.json", (res) => {
    let body = "";
    res.on("data", (d) => {
      body += d;
    });
    res.on("end", () => {
      //가져온 데이터를 JSON Object 형태로 변환하여 저장
      let index_data = JSON.parse(body).desc;

      //루프를 돌면서 페이지 데이터를 가져옵니다.
      for( var i = 0; i < index_data.length; i++ ) {
        //해당 데이터의 type이 text인 경우에만 데이터 분석
        if (index_data[i].type == "text") {
          let str = index_data[i].text;
          str = str.substr(str.indexOf("[") + 1);
          let temp_idx = str.indexOf("]");
          let title = str.substr(0, temp_idx);

          str = str.substr(temp_idx + 1);
          let link = str.slice(1, -1);

          CrawlData.push({
            title: title,
            link: link,
          });
        }
      }
      //얻은 데이터를 화면에 출력합니다.
      console.log(CrawlData);
    });
  })
  .on("error", (e) => {
    console.log("Error: ", e);
  });
