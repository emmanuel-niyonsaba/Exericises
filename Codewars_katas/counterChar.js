

const findTimes=(arr)=>{
  
     let counter={}

     for( i of arr){
         
         counter[i]=(counter[i] ||0)+1
         let sol =`${counter[i]} comes ${(counter[i] ||0)+1} `
        
     }

    for(let a in counter){
        console.log(` The value${a} comes ${counter[a]}`)
    }


}


console.log(findTimes([1,2,3,4,5,5,4,3,32,32,2,3,4,5,6,6,6]))