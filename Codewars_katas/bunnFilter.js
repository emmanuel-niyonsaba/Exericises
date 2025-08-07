
const base =[1,2,3,4,5,6]
const newbase = base.slice()
const toThree =[]
newbase.forEach((ele)=>{
  if (ele <4){
    toThree.push(ele)
  }
})
console.log(base)
console.log(toThree)