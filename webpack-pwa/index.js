// 注册serviceworker

if('serviceworker' in navigator){
    window.onload = function(){
        // /service-worker.js构建后生成
        navigator.serviceWorker.register('/service-worker.js').then(()=>{
            console.log('注册成功 ');
        }).catch(()=>{
            console.log('注册失败');
        })
    }
}