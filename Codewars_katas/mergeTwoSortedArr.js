
function mergeArrays(arr1, arr2) {
  if(arr1.length<1 && arr2.length<1 )return []
  
  const largeArr =new Set([...arr1,...arr2].sort((a,b)=>a-b))
  

    
  
    return [...largeArr]
  
}
console.log(mergeArrays([1,2,3,3,4,4,4,5,5],[3,4,5,6,7,7,8,8,98,9,6]))
