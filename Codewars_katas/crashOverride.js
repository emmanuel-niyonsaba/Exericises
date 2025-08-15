
function aliasGen(first, last){
  var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}
const firstc = first[0]
  const lastc = last[0]
  if(/^[A-z]$/.test(firstc) !==true){
    return `Your name should starts with letter A-Z `
  }
 return `${firstName[firstc]} ${surname[lastc]}`
}

console.log(aliasGen("Akimana","Bonuer"))