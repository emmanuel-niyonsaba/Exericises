function sumTwoSmallestNumbers(numbers) {  
  const sorted = numbers.sort((a,b)=>a-b).filter(e=>e>=0)

  return sorted[0]+sorted[1]
  
}
