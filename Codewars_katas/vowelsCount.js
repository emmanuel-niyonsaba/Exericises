
function getCount(str) {
let count = 0
let vowels='aeiou'
for(let a of vowels){
  for(b of str){
    if( a ==b){
      count++
      
    }
  }
   
}