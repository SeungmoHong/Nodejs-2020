// 익명 함수

let fn = function(){
    console.log('익명함수를 변수 fn이 참조');
}

fn();
console.log(fn);

function funcName(){
    console.log('함수 이름을 갖는 참조');
}
funcName();
console.log(funcName);

//화살표 함수
let arrowFunc =() =>{
    console.log('화살표 함수');
}
arrowFunc();
console.log(arrowFunc)

let power = x => { return x*x }
console.log(power(10));

let power2 = x => x*x 
console.log(power2(10));