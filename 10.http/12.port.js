const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');

http.createServer((req, res) =>{
    let pathname = url.parse(req.url).pathname;
    if(pathname === '/'){
        fs.readFile('view/12.form.html', 'utf8',(error, html)=>{
            res.end(html);
        });
    }else if(pathname === '/proc') {
        let body = '';
        req.on('data', function(data){
            body+= data;
        })
        req.on('end', function(){
            let param = qs.parse(body);
            console.log(param);
            console.log(param.uid,param.pwd)
            res.end(`<h1>${JSON.stringify(param)}</h1>`);
        });
    }
}).listen(3000, () =>{
    console.log('server running at http://loaclhost:3000');
});