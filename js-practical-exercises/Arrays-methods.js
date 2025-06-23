

// .map mehtod 

const arr1 = [1,2,3,4,5,4,3,2,1,2,3,5,6,7,9,7,6,5]
const myMap= arr1.map((emlemet)=>emlemet-3)
console.log(myMap)


// .filter method
const myFilter= arr1.filter((el)=>el % 2 !==0)
console.log(myFilter)

// .reduce method
const myReduce = arr1.reduce((a,b)=>a-b)
console.log(myReduce);


// .forEach method
const myForEach = arr1.forEach((e,i,a)=>{
    console.log(`the element ${i+1} is ${e} and actual array is ${a}`);
})
console.log(myForEach)