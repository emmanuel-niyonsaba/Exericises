

function numCombo(arr, num) {
  let count = 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (arr[i] + arr[j] + arr[k] === num) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log(numCombo([1,0,0,0,0],0))