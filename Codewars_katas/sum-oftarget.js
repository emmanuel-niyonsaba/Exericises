


const sumRange = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return `Pairs were ${arr[i]} and ${arr[j]}`;
      }
    }
  }
  return `There were no numbers that make a pair in the array`;
};


console.log(sumRange([1, 2, 3, 4, 5], 7));
