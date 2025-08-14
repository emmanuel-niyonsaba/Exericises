
/** 
 * @param {string} encoded
 * @returns Uint8Array
 */
function fromBase64(encoded) {
let result =[]
for(let code of encoded){
  result.push(formCharCode(code))
}
  return result.join("")
}
console.log(fromBase64("777d"))