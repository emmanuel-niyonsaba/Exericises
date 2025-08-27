
function abbrevName(name){
    const arr = name.split(" ")
const first = arr[0][0].toUpperCase()
const second = arr[1][0].toUpperCase()
return `${first}.${second}`

}
console.log(abbrevName("emmanuel niyonsaba"))