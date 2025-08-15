String.prototype.toAlternatingCase = function () {
  let result =[]
  for(i=0; i<this.length; i++){
  if(this[i]===this[i].toUpperCase()){
    result.push(this[i].toLowerCase())
  }
  
    else{
      result.push(this[i].toUpperCase())
    }
    
  }
  return result.join('')
}
console.log("hello world".toAlternatingCase())