

// This is for find all arrangement can possible for array

function findCombos(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array.length; k++) {
        result.push([array[i], array[j], array[k]]);
      }
    }
  }

  return result.length;
}

console.log(findCombos([1,2,3]))