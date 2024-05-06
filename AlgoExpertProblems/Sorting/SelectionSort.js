"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
function selectionSort(array) {
    var startIdx = 0;
    while (startIdx < array.length - 1) {
        var smallIdx = startIdx;
        for (var i = startIdx + 1; i < array.length; i++) {
            if (array[smallIdx] > array[i])
                smallIdx = i;
        }
        swap(smallIdx, startIdx, array);
        startIdx++;
    }
    return array;
}
exports.selectionSort = selectionSort;
function swap(smallIdx, startIdx, array) {
    var temp = array[smallIdx];
    array[smallIdx] = array[startIdx];
    array[startIdx] = temp;
}
