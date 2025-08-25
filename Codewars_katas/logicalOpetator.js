
function logicalCalc(booleans, operator) {
  if (operator === "AND") {
    return booleans.reduce((acc, val) => acc && val, true);
  } else if (operator === "OR") {
    return booleans.reduce((acc, val) => acc || val, false);
  } else if (operator === "XOR") {
    return booleans.reduce((acc, val) => acc ^ val, 0) === 1;
  }
}