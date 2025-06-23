

// this is to find maximun number in array by using applay method


const findMax =(numbers)=>{
    const max = Math.max.apply(null,numbers);
    return max
}
console.log(findMax([2,4,5,6,2,5,6,55]));
