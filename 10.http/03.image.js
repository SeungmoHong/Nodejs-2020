const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) =>{
                                            // 데이터 타입
    fs.readFile('media/Elvis.png',  (error, image) =>{
        res.writeHead(200,  {'Content-Type': 'image/png'});
        res.end(image);
    });
});

server.listen(3000);