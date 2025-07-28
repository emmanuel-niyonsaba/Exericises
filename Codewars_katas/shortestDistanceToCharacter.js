function shortestToChar(s, c) {
  if (s.length === 0 || !s.includes(c) || c.length === 0 ) return [];

  const n = s.length;
  const result = new Array(n);
  let prev = -Infinity;


  for (let i = 0; i < n; i++) {
    if (s[i] === c) prev = i;
    result[i] = i - prev;
  }

 
  prev = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    result[i] = Math.min(result[i], prev - i);
  }

  return result;
}


console.log(shortestToChar("lovecodewars", "e")); 
      

