"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
function mergeSort(array) {
    if (array.length <= 1)
        return array;
    var mid = Math.floor(array.length / 2);
    var leftHalf = array.slice(0, mid);
    var rightHalf = array.slice(mid);
    console.log('leftHalf, rightHalf', leftHalf, rightHalf);
    return mergeSortedArray(mergeSort(leftHalf), mergeSort(rightHalf));
}
exports.mergeSort = mergeSort;
function mergeSortedArray(leftHalf, rightHalf) {
    var sortedArray = new Array(leftHalf.length + rightHalf.length);
    var i = 0;
    var j = 0;
    var k = 0;
    console.log('mergeSortedArray ==> ', leftHalf, rightHalf);
    while (i < leftHalf.length && j < rightHalf.length) {
        if (leftHalf[i] <= rightHalf[j]) {
            sortedArray[k] = leftHalf[i];
            i++;
            k++;
            console.log('1st: leftHalf[i] <= rightHalf[j]', sortedArray);
        }
        else {
            sortedArray[k] = rightHalf[j];
            k++;
            j++;
            console.log('1=2st: leftHalf[i] > rightHalf[j]', sortedArray);
        }
    }
    // if left and right array are different size then copy the remaining left array or right array into sorted array
    while (i < leftHalf.length) {
        console.log('i while loop', i, k);
        sortedArray[k++] = leftHalf[i++];
    }
    while (j < rightHalf.length) {
        console.log('j while loop', j, k);
        sortedArray[k++] = rightHalf[j++];
    }
    console.log('sortesArray', sortedArray);
    return sortedArray;
}
//console.log('mergeSort', mergeSort([8,5,2,9,5,6,3]))
///////////////////////// MERGE SORT WITH AUXILARY ARRAY (sort array in place) ///////////////////////////
function MergeSort(array) {
    if (array.length <= 1)
        return array;
    var auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray);
    return array;
}
function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray) {
    if (startIdx === endIdx)
        return;
    var midIdx = Math.floor((startIdx + endIdx) / 2);
    console.log('mergeSortHelper startIdx, midIdx, endIdx', startIdx, midIdx, endIdx);
    console.log('Main and Auxi Array', mainArray, auxiliaryArray);
    mergeSortHelper(auxiliaryArray, startIdx, midIdx, mainArray);
    console.log('before mergeSortHelper 2');
    mergeSortHelper(auxiliaryArray, midIdx + 1, endIdx, mainArray);
    console.log('After merge sort helper call');
    doMerge(mainArray, startIdx, midIdx, endIdx, auxiliaryArray);
}
function doMerge(mainArray, startIdx, midIdx, endIdx, auxiliaryArray) {
    console.log('doMerge', mainArray, auxiliaryArray, startIdx, endIdx, midIdx);
    var k = startIdx; // for auxiliary array
    var i = startIdx;
    var j = midIdx + 1;
    while (i <= midIdx && j <= endIdx) {
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            mainArray[k++] = auxiliaryArray[i++];
        }
        else {
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= midIdx) {
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        mainArray[k++] = auxiliaryArray[j++];
    }
}
console.log('Merge Sort ==> ', MergeSort([8, 5, 2, 9, 5, 6, 3]));
