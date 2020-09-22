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
}
