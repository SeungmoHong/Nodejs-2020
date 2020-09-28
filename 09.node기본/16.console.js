// 시간 측정
console.log('alpha');

let output = 1;
for (let i = 1; i<=1e6; i++){
    output += i;
}
console.log('Result',output)

// 시간측정 종료
console.timeEnd('alpha')