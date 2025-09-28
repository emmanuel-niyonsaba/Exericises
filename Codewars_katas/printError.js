

function printerError(s) {
let counter =0;
const allowed ="abcdefghijklm"
for( let char of s){
if(!allowed.includes(char)){
  counter ++
}
}
  return `${counter}/${s.length}`
  }

  // This comment is here for to build my git hub profile
  
