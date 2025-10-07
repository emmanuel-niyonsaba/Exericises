

let transFormObj=(obj)=>{
    let newobj={}
    for(let key in obj){
        newobj[obj[key]]=key
    }
    return newobj
}

console.log(transFormObj({hello:'emmy',age:12}))
