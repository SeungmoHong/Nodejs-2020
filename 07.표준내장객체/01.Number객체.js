let numberFromLiteral= 273;
let numberFromConstructor = new Number(273);
console.log(numberFromLiteral,numberFromConstructor);

let number = 273.5210332;

console.log(number.toExponential());
console.log(number.toFixed(3));             // 괄호안에 숫자수 만큼 소수점 찍힌다.
console.log(number.toPrecision(8));         // 괄호안의 숫자만큼 소수점 상관없이 찍힌다.
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);       // 2의 53승 -1
console.log(Number.MIN_SAFE_INTEGER);       //-2의 53승 +1

console.log(Math.pow(2,53))