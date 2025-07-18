

const findTimes=(arr)=>{
  
     let counter={}

     for( let i of arr){
         
         counter[i]=(counter[i] ||0)+1
         let sol =`${counter[i]} comes ${(counter[i] ||0)+1} `
        
     }

   return counter

}


console.log(findTimes([1,2,3,"hekk",5,5,4,3,32,32,2,3,4,5,6,6,6]))