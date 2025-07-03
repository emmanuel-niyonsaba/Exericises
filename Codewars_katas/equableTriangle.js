


////A triangle is called an equable triangle if its area equals 
//its perimeter. Return true, if it is an equable triangle, else 
// return false. You will be provided with the length of sides of the triangle

const equableTriangle =(a,b,c)=>{
    const p = (a+b+c)/2
    return p*4 === (p-a)*(p-b)*(p-c)
}
console.log(equableTriangle(5,12,13))