//Array 생성
let cars = ["Saab","Volvo","BMW"];
let persons = new Array("John","Mary");
console.log(cars, persons);

console.log(cars.length, persons.length);
cars.sort();            //알파벳 순서로
console.log(cars);      

// 맨 마지막 엘리먼트
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]);
let html ='';
html += '<ul>'
for (let fruit of fruits) {
    html +='<li>' + fruit+ '</li>\n';
}
html += '</ul>\n';
console.log(html)

fruits[fruits.length]='Cherry'
console.log(fruits.join(','));

let popItem = fruits.pop();                //마지막 데이터를 빼옴.
console.log(popItem, fruits);

let shiftItem = fruits.shift();            // 첫번째 데이터를 빼옴.
console.log(shiftItem, fruits)

fruits.unshift("Lemon")                 // 첫번째 데이터로 적용.
console.log(fruits)


delete fruits[0];
console.log(fruits)

fruits = ["Banana", "Orange","Lemon", "Apple", "Mango"];
let spliceItem = fruits.splice(2, 1);
console.log(spliceItem, fruits);

console.log(cars + fruits);
console.log(cars.concat(fruits));       //두 array 합치기

fruits = ["Banana", "Orange","Lemon", "Apple", "Mango"];
let citrus = fruits.slice(2);
console.log(citrus)
citrus = fruits.slice(1,3);
console.log(citrus)

console.log(fruits.toString());

fruits.forEach(function(value,index){
    console.log(index, value)
});