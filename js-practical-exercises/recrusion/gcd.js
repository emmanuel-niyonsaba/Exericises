
const findGCD =(a,b)=>{
if(!b)return a
return findGCD(b,a%b)
}
console.log(findGCD(122,10))