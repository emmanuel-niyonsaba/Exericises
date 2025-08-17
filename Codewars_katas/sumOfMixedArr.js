
function sumMix(x){
    let result = 0;
    for(let i of x){
        result += parseInt(i)
    }
    return result

}
console.log(sumMix(["2","4"]))