

// Here is any example that shows how the currying  function works in js


const currFun =(a)=>{
return (b)=>{
   return c=>a+b*c
}

}
// to call the currying function you pass arguments in form of function
console.log(currFun(2)(3)(5)); 