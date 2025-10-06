

const removeSmallestNumber=(numbers)=>{
    const lowerNumberIndex = numbers.indexOf(Math.min(...numbers))
   return numbers.filter((e,i)=> i !==lowerNumberIndex)
}

console.log(removeSmallestNumber([1,2,3,4,5,5]))