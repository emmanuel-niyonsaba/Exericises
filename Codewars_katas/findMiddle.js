
function findMiddle(str){

    const regEx =/\d/ig

    const num =`${str.match(regEx).reduce((a,b)=>a*b)}`
    let len = num.length/2
   if(len %2===0){
    return `${num[len-1]}${num[len]}`
}
return `${num[Math.floor(len)]}`
   
}

console.log(findMiddle('s7d8jd9'))