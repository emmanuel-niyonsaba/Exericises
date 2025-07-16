

//this is for the function to roteted the array acconding tho the specified position

const rotete =(arr,p)=>{
    const position = p % arr.length
    return arr.slice(-position).concat(arr.slice(0,-position))

}
console.log( rotete([1,3,5,6,7,8,9],8))

