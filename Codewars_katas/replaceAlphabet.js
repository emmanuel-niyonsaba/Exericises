


function alphabetPosition(text) {
  const alps =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]
                          
                      
  const lower = text.toLowerCase()
  for( let letter of lower){
   for( let   alp of alps ){
     if (letter === alp){
       console.log(indexOf(alp))
       
     }
   }
  }
  return "done"
}
console.log(alphabetPosition("emmyson"))
