const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) =>{
                                                    // 데이터 타입
    fs.readFile('view/02.any.html', 'utf8', (error, html) =>{
        res.writeHead(200,  {'Content-Type': 'text/html'});
        res.end(html);
    })
});

server.listen(3000)