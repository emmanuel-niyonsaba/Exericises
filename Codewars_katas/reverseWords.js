

function reverseWords(str) {
  return str.split(" ").map((i)=>i.split('').reverse().join('')).join(" ")
}
console.log(reverseWords("emmanuel Niyonsab Year 1 students a special Class A"))