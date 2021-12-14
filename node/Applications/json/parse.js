const fs = require('fs');

fs.readFile('./node/Applications/json/list.json', (err, data) => {
    if(err) throw err;
    const json = JSON.parse(data.toString()); //json string 객체를 자바스크립트 오브젝트로 변환 <-> JSON.stringify()
    console.log(json[0].name);
    console.log(json[1].name);
})