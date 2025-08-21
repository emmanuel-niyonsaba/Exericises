

function capitalize(s){
const arr = s.split("")
const result1 = []
const result2 = []
arr.forEach((el,indx)=>{
    if(indx%2===0){
        result1.push(el.toUpperCase())
        result2.push(el.toLowerCase())
    }else{
        result2.push(el.toUpperCase())
      result1.push(el)
  
    }
})
return [result1.join(""),result2.join("")]
  
}
console.log(capitalize("djalfdkfdfjla"))