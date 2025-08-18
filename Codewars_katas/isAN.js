
function isAN(value) {
  if (typeof value === "number") {
    return Number.isFinite(value);
  }
  if (value instanceof Number) {
    return Number.isFinite(value.valueOf());
  }
  return false;
}


console.log(isAN(2))