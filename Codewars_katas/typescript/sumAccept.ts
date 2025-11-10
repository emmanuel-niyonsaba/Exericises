
export function sumArray(array: number[] | null): number {
  if (!array || array.length === 0) {
    return 0;
  }

  const maxNumber = Math.max(...array);
  const minNumber = Math.min(...array);

  let result = 0;
  array.forEach((e) => {
    if (e !== maxNumber && e !== minNumber) {
      result += e;
    }
  });

  return result;
}

console.log(sumArray([12, 4, 5, 8, 9, 6, 89, 5]));
