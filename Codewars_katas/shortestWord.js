

function findShort(s){
    const myMap = new Map()
   
    const arr= s.split(" ")
     
    arr.forEach((el)=>{
        myMap.set(el,el.length)
      
    })
   const result =myMap.values()
   return Array.from(result).sort()[0]
   
}
console.log(findShort("ak akak akaka ak ka akkakak"))