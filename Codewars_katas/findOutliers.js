

function findOutlier(integers) {
  if (integers.length < 3) {
  
    return null;
  }

  const even = integers.filter(num => num % 2 === 0);
  const odd = integers.filter(num => num % 2 !== 0);


  return even.length === 1 ? even[0] : odd[0];
}

// Examples
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // ➜ 11 (odd one out)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // ➜ 160 (even one out)
