"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestSubarrayWithSum = void 0;
function longestSubarrayWithSum(array, targetSum) {
    // Write your code here.
    var indices = [];
    var currentSum = 0;
    var startIdx = 0;
    var endIdx = 0;
    while (endIdx < array.length) {
        currentSum += array[endIdx];
        console.log('before curent Sum and startIdx and endIdx', currentSum, startIdx, endIdx);
        while (startIdx < endIdx && currentSum > targetSum) {
            currentSum -= array[startIdx];
            startIdx++;
            console.log('After currentSum and startIndex', currentSum, startIdx, endIdx);
        }
        if (currentSum === targetSum) {
            if (indices.length === 0 || indices[1] - indices[0] < endIdx - startIdx) {
                indices = [startIdx, endIdx];
            }
            console.log('sum matched', indices);
        }
        endIdx++;
    }
    return indices;
}
exports.longestSubarrayWithSum = longestSubarrayWithSum;
console.log('longestSubarrayWithSum', longestSubarrayWithSum([1, 2, 3, 4, 3, 3, 1, 2, 1, 2], 10));
