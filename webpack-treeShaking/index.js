


document.getElementById('but').onclick = function(){
    import(/* webpackChunkName: 'test011', webpackPrefetch: true*/ './test').then(res=>{
        console.log('res :>> ', res);
    })
}
// import(/* webpackChunkName: 'test011' */ './test').then(res => {
//     console.log('res :>> ', res);
// }).catch(err=>{
//     console.log('err :>> ', err);
// })