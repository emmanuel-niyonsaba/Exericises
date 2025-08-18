
function isAN(value) {
  if(typeof value === "Number")return true
  for(let i in value){
    if (typeof i === "Number") 
        {
        return true
    }
  }
  return false

}

console.log(isAN(2))