// String Length
let hello = "안녕하세요";
console.log(hello.length);

// String 내에서 문자열을 찾을 때
console.log(hello.indexOf('하'));
console.log(hello.indexOf('한'));

let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf("locate");
console.log(pos);

//문자열 일부분 추출
str = "Apple, Banana, Kiwi";
let res =str.slice(7,13);   //시작 인덱스, 끝 인덱스
console.log(res);
console.log(str.slice(-4));

console.log(str.substr(7,6));   // 시작 인덱스, 글자의 갯수

// 문자열을 대체
let newStr = str.replace(',',':');  // 첫번째 글짜만 바뀜
console.log(newStr);          
newStr=str.replace(/,/g,':');       // 다바뀜
console.log(newStr)

//공백 제거

str = "             Hello           World!"   //문자사이의 공백은 제거x
console.log(str);
console.log(str.trim());

// 문자 추출
console.log(hello.charAt(2), hello[2]);

// 문자열을 Array로 변경
let txt = "a,b,c,d,e";
console.log(txt.split(","))