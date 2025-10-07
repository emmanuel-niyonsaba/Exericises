
// function firstNonRepeatingLetter(s) {
//   const arr = s.split('');
//   const lower = s.toLowerCase();

//   for (let i = 0; i < arr.length; i++) {
//     if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
//       return arr[i];
//     }
//   }

//   return null; 

// }
// console.log(firstNonRepeatingLetter("sTreSS"))


let arr =[1,2,4,3,3,1,3,[2,3,4,7,223]]
console.log([...new Set(arr.flat(Infinity))])

