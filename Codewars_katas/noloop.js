
// This funciton is to find if the give array contain a element which may be greater than limit

const smallEnough =(arr,limit)=>{
    // this .every method help to iterate trhoug any arr and check the condition to each element and return true or false
    return arr.every(el=>el<=limit)

}
console.log(smallEnough([1,2,3,4,4,5,6,7],6))