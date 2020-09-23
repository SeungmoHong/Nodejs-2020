// 함수를 포함하는 객체
let name = '외부 이름';
let price = '외부 가격'
let product = {
    name : '치약',
    vol: 500,
    price: 300,
    print: function(){
        console.log(`제품명은 ${this.name}이고 가격은 ${this.price}입니다.`);
        console.log(`제품명은 ${name}이고 가격은 ${price}입니다.`);
    },
    string: function(){
        return (`제품명은 ${this.name}이고 가격은 ${this.price}입니다.`);
    }
}
// this. 로 객체안의 값 지정가능
product.print()
console.log(product.string())