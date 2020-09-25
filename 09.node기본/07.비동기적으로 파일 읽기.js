// 비동기적으로 파일 열기
const fs = require('fs');
fs.readFile('tmp/textfile.txt','utf-8',function(error, buffer){
    console.log(buffer);
})

