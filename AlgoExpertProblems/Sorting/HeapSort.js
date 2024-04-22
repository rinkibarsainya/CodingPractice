"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heapSort = void 0;
function heapSort(array) {
    buildMaxHeap(array);
    console.log('build heap', array);
    for (var endIdx = array.length - 1; endIdx > 0; endIdx--) {
        swap(0, endIdx, array);
        shiftDown(0, endIdx - 1, array);
    }
    return array;
}
exports.heapSort = heapSort;
function buildMaxHeap(array) {
    var firstParentIdx = Math.floor((array.length / 2) - 1);
    console.log('firstParentIdx and heap array', firstParentIdx, array);
    for (var i = firstParentIdx; i >= 0; i--) {
        shiftDown(i, array.length - 1, array);
    }
}
function shiftDown(currentIdx, endIdx, heap) {
    var childOneIdx = 2 * currentIdx + 1;
    console.log('childOneIdx', childOneIdx);
    while (childOneIdx <= endIdx) {
        var childTwoIdx = 2 * currentIdx + 2 <= endIdx ? 2 * currentIdx + 2 : -1;
        var idxToSwap = void 0;
        console.log('childTwoIdx', childTwoIdx);
        if (childTwoIdx != -1 && heap[childTwoIdx] > heap[childOneIdx]) {
            idxToSwap = childTwoIdx;
        }
        else {
            idxToSwap = childOneIdx;
        }
        console.log('idxToSwap', idxToSwap);
        if (heap[idxToSwap] > heap[currentIdx]) {
            swap(idxToSwap, currentIdx, heap);
            console.log('after swap =>', heap);
            currentIdx = idxToSwap;
            childOneIdx = currentIdx * 2 + 1;
        }
        else {
            return;
        }
    }
}
function swap(i, j, heap) {
    var temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
}
console.log('Heap Sort ==> ', heapSort([8, 5, 2, 9, 5, 6, 3]));
