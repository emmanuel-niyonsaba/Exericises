
// This funcition is to check is as string is secure or not by 

// 1. it must only contain the uppercases and lowercases letter and also number are allowed 

function alphanumeric(string){
const regEx =/^[0-9a-zA-Z]+$/
return regEx.test(string)
  

}
console.log(alphanumeric("hello world_"))