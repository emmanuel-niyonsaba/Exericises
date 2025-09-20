

function comp(array1, array2){
for ( let a of array1){
  for( let b of array2){
    if(b==a*a )return true
  }
}
  return falsee
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11] ,[121, 14641, 20736, 36100, 25921, 361, 20736, 361]))