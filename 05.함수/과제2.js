/* 
let sum =1000;

let a,b,c ;

for(a = 1; a < sum; a++){
    for(b = 1; b < sum; b++){
        for(c = 1; c < sum; c++)
        {
            if (a * a + b * b == c * c && (a+b+c)==sum && (a+b>c) && (a<b)){
                console.log(a,b,c)
            }
        }
    }
} */
let a, b, c;
let outerBreack=false;
for(a=1; a<332; a++) {
    for(b=a+1; b<=499; b++){
        c=1000-a-b;
        if(c>(a+b))
        continue;
        if(c*c === a*a + b*b){
            console.log(a,b,c);
            console.log(a*a,b*b,c*c);
            outerBreack = true ;
            break;
        }
    }
    if(outerBreack)
        break;
}