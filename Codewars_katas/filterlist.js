
function filter_list(l) {
    let result=[]
    l.map(e=>{
        if(!typeof e ==="String"){
            result.push(e)
        }
    })
    return result
}
console.log(filter_list([1,2,'aasf','1','123',123]))