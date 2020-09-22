// 사용자가 입력한 글을 받는 방법
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('정수 입력> ');
rl.prompt();

rl.on('line', function(buf) {
    let a = parseInt(buf);
    let sum=0;
    for(let i=0; i<a+1; i++){
        sum+=(i*i)+(i*i)*(i*i);
    }
    console.log(sum);
    rl.close();
});
