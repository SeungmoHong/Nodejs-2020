const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.studout
});
rl.setPrompt('성적 입력>')
rl.prompt();

rl.on('line', function(buf){
    let score = parseInt(buf);
    switch(parseInt(score/10)){
        case 10:
        case 9:
            grade='A'
            break;
        case 8:
            grade='B'
            break;
        case 7:
            grade='c'
            break;
        case 6:
            grade='D'
            break;
        default:
            grade='F'
    }
    
console.log(`성적: ${score}, 학점 : ${grade}`);
rl.close();
});
