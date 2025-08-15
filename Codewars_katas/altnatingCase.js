

String.prototype.toAlternatingCase = function () {
  let result =[]
  for(i=0; i<this.length; i++){
  result.push ( this[i].toUpperCase()===true? this[i].toLowerCase(): this[i].toUpperCase())
  }
  return result.join('')
}
console.log("hello word".toAlternatingCase)