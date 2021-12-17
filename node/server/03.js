const filesystem_var = require('fs');

//파일 삭제하는 메서드 : unlink
filesystem_var.unlink('./node/server/test.txt', (err) => {
    if(err) {
        throw err;
        return;
    }
    console.log('delete success');
})