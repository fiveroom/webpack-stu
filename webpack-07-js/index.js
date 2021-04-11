const  hello =  (x, y) =>{
    return x + y
}

let delay = (time = 1000) => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove(true)
        }, time);
    })
}
delay().then(res =>{
    console.log('helo :>> ');
})
hello(2, 3)