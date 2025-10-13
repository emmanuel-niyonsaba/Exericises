
// this wil check if the number of oh's and x in string are equal and return ture 
// else it will return false
function XO(str) {
//     let x= str.match(/x/i).length;
//   console.log(x)
//   console.log("Here!")
//   let o= str.match(/o/i).length;
// //   console.log(o)
  
// return  x==o?true:false
  let lower = str.toLowerCase()
  
  let xarr=0;
  let oarr =0;
  for(let x of lower){
    if(x=="x"){
    xarr +=1
    }
    if(x=="o"){
      oarr +=1
    }
  }
  return xarr==oarr?true:false
}