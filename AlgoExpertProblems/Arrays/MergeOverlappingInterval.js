"use strict";
// step1 . sort the interval with respect to their staring value
// step2. After sorting traverse them and at each iteration, compare start of next inteval to the end of current interval to look for overlap
// step3. If find overlap mutate the current interval
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeOverlappingIntervals = void 0;
function mergeOverlappingIntervals(array) {
    // Write your code here.
    var sortedIntervals = array.sort(function (a, b) { return a[0] - b[0]; });
    var currentInterval = sortedIntervals[0];
    var mergedInterval = [];
    mergedInterval.push(currentInterval);
    for (var _i = 0, sortedIntervals_1 = sortedIntervals; _i < sortedIntervals_1.length; _i++) {
        var nextInterval = sortedIntervals_1[_i];
        var _ = currentInterval[0], currentIntervalEnd = currentInterval[1];
        var nextIntervalStart = nextInterval[0], nextIntervalEnd = nextInterval[1];
        if (currentIntervalEnd >= nextIntervalStart) {
            console.log('if true', currentInterval);
            currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
            console.log('Merge array', mergedInterval);
        }
        else {
            console.log('if false', currentInterval, nextInterval);
            currentInterval = nextInterval;
            console.log('mergeInterval before ', mergedInterval);
            mergedInterval.push(currentInterval);
            console.log('mergedInterval after', mergedInterval);
        }
    }
    return mergedInterval;
}
exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
console.log('Merge Overlapping Interval', mergeOverlappingIntervals([[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]));
