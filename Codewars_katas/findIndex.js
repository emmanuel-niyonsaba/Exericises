

const FindAll =(array,ele)=>{
    let result = []
    const selected = array.filter((element, index)=>{
        if(element === ele){
            result.push(index)
        }
    })
    return result
}
console.log(FindAll([122,2,3,4,5,6,7,5,4,3,2,3,44,4,3,2,2,4,3,3],3))
