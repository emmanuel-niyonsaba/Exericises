class RomanNumerals {
  static toRoman(num) {
    const romanMap = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" }
    ];

    let result = '';
    for (const { value, symbol } of romanMap) {
      while (num >= value) {
        result += symbol;
        num -= value;
      }
    }

    return result;
  }

  static fromRoman(str) {
    const romanMap = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    let result = 0;
    let i = 0;

    while (i < str.length) {
      const twoChar = str.slice(i, i + 2);
      if (romanMap[twoChar]) {
        result += romanMap[twoChar];
        i += 2;
      } else {
        result += romanMap[str[i]];
        i += 1;
      }
    }

    return result;
  }
}
