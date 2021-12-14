const fs = require('fs');

fs.readFile('./node_review/json/world_list.json', (err, data) => {
    if(err) throw err;
    const world = JSON.parse(data.toString()); //json string 객체를 자바스크립트 오브젝트로 변환 <-> JSON.stringify()
    for(i=0; i<6; i++) {
        console.log(world[i].name);
        console.log(world[i].area);
    }
})