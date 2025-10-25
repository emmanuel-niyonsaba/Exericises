
// A simple calculator function that performs basic arithmetic operations
function calculator(a, b, sign) {
// Validate inputs are numbers 
  if (typeof a !== 'number' || typeof b !== 'number') {
    // If inputs are not numbers, return 'unknown value'
    return 'unknown value';
  }
// 
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
      // If the operation sign is not recognized, return 'unknown value'
    default:
      return 'unknown value';
  }
}
