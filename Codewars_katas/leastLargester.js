
function leastLarger(a,i) {
  let target = a[i]
  let slv = Infinity
  let sli= -1
  for( i=0 ; i<a.length; i++){
    if(a[i]>target && a[i]<slv){
      slv = a[i];
      sli =i
    }
  }
  return sli
 }
 console.log(leastLarger([1,2,3,4,5,6],5))
 