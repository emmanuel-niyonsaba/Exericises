


function alphabetPosition(text) {
  const alps =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"]
                          
        let result =[] ;      
  const lower = text.toLowerCase()
  for( let letter of lower){
    if(alps.includes(letter)){
        result.push(alps.indexOf(letter)+1)
    }
}
return result.join(" ")
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."))
