

const createCounter=()=>{
    let counter = 0;
    return function counterFn(){
        counter +=1
        
        return counter

    }
}
let counterq = createCounter()
console.log(counterq());
console.log(counterq());
console.log(counterq());
console.log(counterq());
console.log(counterq());
console.log(counterq());