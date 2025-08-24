
function findAverage(array) {
  if(array.length <1) return 0
  return array.reduce((a,b)=>a+b)/array.length
}
console.log(findAverage([1,2,3,4,5,6,7,8]))
console.log(findAverage([]))
