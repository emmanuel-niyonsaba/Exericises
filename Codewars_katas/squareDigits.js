function squareDigits(num){
  let result=[]
for(let n of num ){
result.push(n*n,'-')
}
return result
}

console.log(squareDigits("386438"))