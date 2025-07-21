

// Here job was to create fuction that will measure if the left and right side if blanced refer to the 
// Exclamation mark and question mark
function balance(left, right) {
  const regEx1 = /\?/g;
  const regEx2 = /\!/ig;

  const leftEX = ((left.match(regEx2) || []).length) * 2;
  const leftQue = ((left.match(regEx1) || []).length) * 3;

  const rightEX = ((right.match(regEx2) || []).length) * 2;
  const rightQue = ((right.match(regEx1) || []).length) * 3;

  const leftResult = leftEX + leftQue;
  const rightResult = rightEX + rightQue;

  if (leftResult === rightResult) return "balance";
  return leftResult > rightResult ? "Left" : "Right";
}

console.log(balance("!!!!", "!!!!")); 
