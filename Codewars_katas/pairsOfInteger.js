
function generatePairs(n) {
  let result=[];
  for( let i =0 ; i<=n ; i++){
    for( let k=i ; k<=3; k++ ){
      result.push([i,k])
    }
  }
  return result
}