
// this is for creating function to find from range and return the number
//  which can still have meaning while its roteted
function isUpsideDown(n) {
  const rotateMap = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6'
  };

  const str = n.toString();
  let rotated = '';

  for (let i = str.length - 1; i >= 0; i--) {
    const digit = str[i];
    if (!(digit in rotateMap)) {
      return false; // If any digit is invalid, it's not an upside-down number
    }
    rotated += rotateMap[digit];
  }

  return rotated === str;
}

function solve(x, y) {
  const result = [];
  for (let i = x; i < y; i++) {
    if (isUpsideDown(i)) {
      result.push(i);
    }
  }
  return result;
}

// Example usage:
console.log(solve(0, 100)); // will return all upside down numbers between 0 and 99
