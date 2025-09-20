

function comp(array1, array2){
for ( let a of array1){
  for( let b of array2){
    if(b==a*a )return true
  }
}
  return falsee
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11] ,[121, 14641, 20736, 36100, 25921, 361, 20736, 361]))



// and here is the another ways  to do that also


function compTwo(array1, array2) {
  if (!array1 || !array2) return false; // handle null/undefined
  if (array1.length !== array2.length) return false; // lengths must match

  // Square all elements of array1 and sort both arrays
  let aSquared = array1.map(x => x * x).sort((x, y) => x - y);
  let bSorted = array2.slice().sort((x, y) => x - y);

  // comparision of the each element
  return aSquared.every((val, i) => val === bSorted[i]);
}
