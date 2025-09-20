
function high(x){
const arr =x.split("")
let result =[]
let arph= [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
for( let a of arr){
    for(let b of arph){
        if(a ==b){
            result.push(arph.indexOf(b))
        }
    }
}
return result
}
console.log(high('man i need a taxi up to ubud'))