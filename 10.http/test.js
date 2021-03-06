const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const view = require('./view/index')

http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;
    if(pathname === '/'){
        fs.readdir('data', function(error, filelist){
            let list = '';
            for (let file of filelist){
                let filename = file.substring(0, file.length-4)
                list += `<li><a href="/?id=${filename}">${filename}</a></li>`;
            }
            let html= view.index(list);
            res.end(html);
        })
        fs.readFile('data/index.html', 'utf8', (error, html)=>{
            res.end(html)
        })
    }else{
        res.writeHead(404,  {'Content-Type': 'text/html'});
            res.end();
    }
}).listen(3000, () =>{
    console.log('server running at http://loaclhost:3000');
});