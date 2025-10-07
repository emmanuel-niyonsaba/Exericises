

let transFormObj=(obj)=>{
    let newobj={}
    for(let key in obj){
        newobj[obj[key]]=key
    }
    return newobj
}

console.log(transFormObj({hello:'emmy',age:12}))
//this was about to change the object property into value and also value to property name as well