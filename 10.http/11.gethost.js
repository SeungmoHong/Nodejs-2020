const http = require('http')
const url = require('url')

let server = http.createServer((req, res) =>{
    let query =url.parse(req.url,true).query;
    console.log(query.name, query.region);
    //GET 파라메터 출력 localhost:3000>name=kim&region=Seoul
    res.end(`<h1> ${JSON.stringify(query)} </h1>`)
}).listen(3000, () =>{
    console.log('server running at http://loaclhost:3000');
});