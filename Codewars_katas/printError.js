

function printerError(s) {
let counter =0;
const allowed ="abcdefgijkm"
for( let char of s){
if(!allowed.includes(char)){
  counter ++
}
}
  return `${counter}/${s.length}`
  }
