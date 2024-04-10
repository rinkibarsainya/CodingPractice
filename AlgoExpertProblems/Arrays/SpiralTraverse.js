"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spiralTraverse = void 0;
function spiralTraverse(array) {
    // Write your code here.
    var result = [];
    var startRow = 0;
    var endRow = array.length - 1;
    var startCol = 0;
    var endCol = array[0].length - 1;
    while (startRow <= endRow && startCol <= endCol) {
        for (var col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }
        for (var row = startRow + 1; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }
        for (var col = endCol - 1; col >= startCol; col--) {
            if (startRow === endRow)
                break;
            result.push(array[endRow][col]);
        }
        for (var row = endRow - 1; row > startRow; row--) {
            if (startCol === endCol)
                break;
            result.push(array[row][startCol]);
        }
        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return result;
}
exports.spiralTraverse = spiralTraverse;
var inputArray = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
];
console.log('spiralTraverse', spiralTraverse(inputArray));
