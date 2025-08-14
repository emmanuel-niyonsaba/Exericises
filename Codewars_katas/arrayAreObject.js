function magicArray(...items) {
  class MagicArray extends Array {
    count() {
      return this.length;
    }
    double() {
      return new MagicArray(...this, ...this);
    }
    multiply(n) {
      return new MagicArray(...this.map(x => x * n));
    }
    first() {
      return new MagicArray(this[0]);
    }
    last() {
      return new MagicArray(this[this.length - 1]);
    }
    eq(index) {
      return new MagicArray(this[index]);
    }
  }
  return new MagicArray(...items);
}
function getSplit(arr) {
  return {
    pass: arr.filter(a => typeof a === "string"),
    fail: arr.filter(a => typeof a !== "string")
  };
}

let testArray = magicArray(1, 2, 3);
console.log(testArray.count()); // 3
console.log(testArray.double()); // [1, 2, 3, 1, 2, 3]
console.log(testArray.multiply(2)); // [2, 4, 6]
console.log(testArray.first()); // [1]
console.log(testArray.last()); // [3]
console.log(testArray.eq(1)); // [2]

