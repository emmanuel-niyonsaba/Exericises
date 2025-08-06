


const findFibunacci=(number)=>{
    if(number <=0)return []
   if(number ===1)return [0]
   if(number ===2)return [0,1]
   let fib = findFibunacci(number-1)

       fib.push(fib[fib.length - 1] + fib[fib.length - 2])
       return fib
    }

console.log(findFibunacci(20))

