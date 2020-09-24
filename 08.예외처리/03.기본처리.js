function callThreetimes(callback){
    if (callback){
        for(let i = 0; i<3; i++){
            callback();
        }
    }else{
            console.log('callback 함수를 정의하세요')
        }
    }
callThreetimes(function(){
    console.log('호출')});

callThreetimes();