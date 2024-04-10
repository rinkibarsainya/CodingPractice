"use strict";
//Array is said to be monotonice if its element leftto right are 
//entirely non- increasing or entirely non-decreasing
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMonotonic = void 0;
function isMonotonic(array) {
    // Write your code here.
    var isNonDecreasing = true;
    var isNonIncreasing = true;
    for (var i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1])
            isNonIncreasing = false;
        if (array[i] < array[i - 1])
            isNonDecreasing = false;
    }
    return isNonDecreasing || isNonIncreasing;
}
exports.isMonotonic = isMonotonic;
console.log('IsMonotonice', isMonotonic([1, 5, 10, 1100, 1101, 1102, 9001]));
console.log('IsMonotonice', isMonotonic([-1, -5, -10, -1100, -1101, -1102, -9001]));
