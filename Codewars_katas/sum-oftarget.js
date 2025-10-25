

// Function to find two numbers in an array that sum up to a target value
const sumRange = (arr, target) => {
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // For each element, check against all other elements
    for (let j = 0; j < arr.length; j++) {
      // Check if the current pair sums to the target
      if (arr[i] + arr[j] === target) {
        // If a pair is found that sums to the target, return the pair
        return `Pairs were ${arr[i]} and ${arr[j]}`;
      }
    }
  }
  // If no pairs found that sum to the target, return a message indicating so
  return `There were no numbers that make a pair in the array`;
};

// Example usage: 
console.log(sumRange([1, 2, 3, 4, 5], 7));
