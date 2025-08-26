
function findUniq(arr) {

  function cleanString(str) {

    let letters = str.toLowerCase().replace(/\s+/g, '').split('');
    let uniqueLetters = [...new Set(letters)];
    return uniqueLetters.sort().join('');
  }


  let cleaned = arr.map(cleanString);

 
  for (let i = 0; i < cleaned.length; i++) {
    if (cleaned.indexOf(cleaned[i]) === cleaned.lastIndexOf(cleaned[i])) {
      return arr[i];
  }
}
}

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]))