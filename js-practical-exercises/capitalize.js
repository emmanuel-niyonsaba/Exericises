
// this is for creating function to capitalize the first character of string given



const transformFn=(str)=>{
    return str[0].toUpperCase() + str.slice(1);
}
console.log(transformFn("john"));