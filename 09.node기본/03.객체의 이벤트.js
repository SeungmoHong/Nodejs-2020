// process.on('exit',function(){
//     console.log('프로세스가 종료되었습니다.');
// });
//exit 이벤트 연결
process.on('exit',(code) => {
    console.log('프로세스가 종료되었습니다.');
    console.log('exit code:', code);
})
//uncaughtException 이벤트 연결
process.on('uncaughtException',error => {
    console.log('예외가 발생했습니다.');
    console.log('uncaughtException 매개변수:\n', error)
});
//임의의 이벤트 연결
process.on('message',() =>{
    console.log('message event')
})
error.error.error();