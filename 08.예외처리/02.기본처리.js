function callThreetimes(callback){
    for(let i = 0; i<3; i++){
        callback();
    }
}
callThreetimes(function(){
    console.log('호출')});

callThreetimes();