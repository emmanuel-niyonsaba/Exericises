



function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return "No two possible numbers";
}

console.log(twoSum([1,2,3,4,5,6,7,8,9,0,8,7,44,66,4,,5,455,3,],10))