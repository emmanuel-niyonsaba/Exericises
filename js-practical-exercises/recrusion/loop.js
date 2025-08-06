
// this recursive function will create the loop on incrementing 

const loopform =(number)=>{
if(number <0) {
    return number
}
console.log(number) 
loopform(number-1)
}
loopform(10)