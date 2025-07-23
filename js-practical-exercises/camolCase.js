

// This function is to stplit according to the camoCase conves=tion 


const camolCase =(string)=>{
let result =[]
const newString = string.split("")
newString.forEach((elem,index) => {
    if(/[A-Z]/.test(elem) ===true){
        result.push(" ")
        result.push(elem)
       
    }
    else{
        result.push(elem)
    }
});
return result.join("")
}
console.log(camolCase("camolCase"))