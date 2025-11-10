"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = sumArray;
function sumArray(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    var maxNumber = Math.max.apply(Math, array);
    var minNumber = Math.min.apply(Math, array);
    var result = 0;
    array.forEach(function (e) {
        if (e !== maxNumber && e !== minNumber) {
            result += e;
        }
    });
    return result;
}
console.log(sumArray([12, 4, 5, 8, 9, 6, 89, 5]));
