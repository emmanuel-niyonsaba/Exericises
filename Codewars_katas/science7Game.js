
const solve =(a,b,c)=>{
    const gg = Math.min(a,b,c)*7
    const sum = a**2+b**2+c**2
    return gg+sum

}
console.log(solve(4,2,2))