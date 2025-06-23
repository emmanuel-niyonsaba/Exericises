

// this is for cambining the numbers 
// to combine all even together and the odd together


const combineNumber=(arr)=>{
const evenNumber= arr.filter((a)=>a % 2 == 0).join("")
const oddNumber= arr.filter((a)=>a % 2 !== 0).join("")
return [oddNumber,evenNumber];
}
console.log(combineNumber([1,2,3,4,5,6,7,8,9]));