
const findFactorial =(number)=>{
if (number ===1 || number ===0)return 1
  return number* findFactorial(number-1)
}
console.log(findFactorial(5))