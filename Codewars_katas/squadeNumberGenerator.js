

// function generateNumber(squad, n) {
 
//   if (!squad.includes(n)) {
//     return n;
//   }

//   for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//       if (i + j === n) {
//         const combined = parseInt(`${i}${j}`);
//         if (!squad.includes(combined)) {
//           return combined;
//         }
//       }
//     }
//   }


//   return null;
// }

const squadNumber =(s,n)=>{
if(!s.includes(n)) return n;
for (i =0 ; i<=9 ; i++){
    for(j=0 ;j <=9 ; j++){
        if (i+j === n){
            const combined = parseInt(`${i}${j}`)
            if(!s.includes(combined)){
                return combined
            }
        }
    }
}
return null
}
console.log(squadNumber([3,4,5,6,7,8,5,3,2],8),)