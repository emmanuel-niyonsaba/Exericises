
function catchSignChange(arr) {
  if (arr.length < 1) return 0;

  let count = 0;

  for (let i = 0; i < arr.length ; i++) {
    if ((arr[i] > 0 && arr[i + 1] <= 0) ||
        (arr[i] < 0 && arr[i + 1] >= 0) ||
        (arr[i] === 0 && arr[i + 1] !== 0)) {
      count++;
    }
  }

  return count;
}