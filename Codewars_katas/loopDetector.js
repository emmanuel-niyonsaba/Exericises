
const hasLoop =(arr)=>{
    let visted = new Set()
    for(i =0 ; i<arr.length ; i= arr[i]){
        if(visted.has(i)){
            return true
        }
        visted.add(arr[i])
    }
    return false
}
console.log(hasLoop([1,2,3,5,7,9]))