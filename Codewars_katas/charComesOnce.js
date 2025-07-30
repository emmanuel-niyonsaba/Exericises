
function firstNonRepeatingLetter(s) {
  const arr = s.split('');
  const lower = s.toLowerCase();

  for (let i = 0; i < arr.length; i++) {
    if (lower.indexOf(lower[i]) === lower.lastIndexOf(lower[i])) {
      return arr[i];
    }
  }

  return ''; 


}

console.log(firstNonRepeatingLetter("sTreSS"))