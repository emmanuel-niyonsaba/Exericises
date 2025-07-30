
const removeSmall =(arr)=>{
    const small = Math.min(...arr)
    const elindex =arr.indexOf(small)
 return    arr.slice(0,elindex).concat(arr.slice(elindex+1))

   

}
  
   
console.log(removeSmall( [5,3,2,1,4,2,1,3]))