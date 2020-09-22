let a=[]
for(let i=1; i<1000+1; i++){
    a.push(i)
    if(a.indexOf('1')>=0)
    a+=0;
}


console.log(a)