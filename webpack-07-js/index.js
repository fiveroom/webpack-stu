const  hello =  (x, y) =>{
    return x + y
}

class HelloM{
    butClass = 123;

    print(){
        console.log('this.butClass :>> ', this.butClass);
    }
}

new HelloM().print()

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