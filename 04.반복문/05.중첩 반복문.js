//별 모양으로 다이아몬드 만들기
//1사분면
for (let i = 0; i<5; i++){
    let stars='';
    for (let k = 0; k < i +1; k++){
        stars +='*';
    }
    console.log(stars);
}
//2사분면
for (let i=0; i<5; i++){
    let stars = "";
    for(let k=0; k<5-i-1; k++){
        stars +=' ';
    }
    for (let k = 0; k < i +1; k++){
        stars +='*';
    }
    console.log(stars);
//3사분면
}
for (let i=5; i>0; i--){
    let stars = ' ';
    for (let k=0; k<5-i-1; k++)
    stars +=' ';
    for(let k=0; k<i; k++){
        stars +='*'
    }
    console.log(stars);
}
//4사분면
for (let i=5; i>0; i--){
    let stars ='';
    for (let k=0; k<i; k++){
        stars +='*';
    }
    console.log(stars);
}


for(let i=0; i<5; i++){
    let stars='';
    for (let k = 0; k<5-i-1; k++){
        stars +=' ';
    }
    for(let k=0; k<2*i+1; k++) {
        stars +='*';
    }
    console.log(stars)
}
for (let i=4; i>0; i--) {
    let stars='';
    for(let k=1; k<5-i; k++){
        stars +=' ';
    }
    for (let k=0; k<2*i-1; k++){
        stars += '*'
    }
    console.log(stars)
}