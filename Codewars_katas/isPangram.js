
function isPangram(string){
 let letters = string.toLowerCase().match(/[a-z]/g)
 let unique = new Set(letters)
 return unique.size ==26

}
console.log(isPangram("The quick brown fox jumps over the lazy dog"))