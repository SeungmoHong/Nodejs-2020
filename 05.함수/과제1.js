// 사용자가 입력한 글을 받는 방법
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('양의 정수 입력> ');
rl.prompt();

rl.on('line', function(buf) {
    // let a = parseInt(buf);
    // let sum=0;
    // for(let i=1; i<=a; i++){
    //     sum+=(i*i)+(i*i)*(i*i);
    // }
    // console.log(sum);

    let number = parseInt(buf);
    let sumOfSqaure = 0;
    for(let i=1; i<= number; i++){
        sumOfSqaure += i*i;
    }
    console.log(`1에서 ${number}까지의 제곱의 합 : ${sumOfSqaure}`)
    let sum =0;
    for(let i=1; i<=number; i++){
        sum+=i;
    }
    let sumOfSqaure = sum*sum;
    console.log(`1에서 ${number}까지의 제곱의 합 : ${sumOfSqaure}`)
    rl.close();
});
