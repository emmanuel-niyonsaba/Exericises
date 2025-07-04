


// Here job is to create a function to calculate the remainder and display it without using the % operator

const whatIsRemainder =(number, divisor)=>{
    
    return number - Math.floor((number/divisor)*divisor) 
} 
console.log(whatIsRemainder(4,2))