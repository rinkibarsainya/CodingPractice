"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transposeMatrix = void 0;
//Create 2D Array
var arr2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// console.log(arr2D)
// console.log('length', arr2D.length, 'rows:',arr2D.length, 'col', arr2D[0].length )
// Create a 2D array with 3 rows and 4 columns
// const rows = 3;
// const columns = 4;
// const dynamicArr2D = new Array(rows);
// for (let i = 0; i < rows; i++) {
//   dynamicArr2D[i] = new Array(columns).fill(0); // Fill each row with 0s
// }
// console.log('dynamicArr2D', dynamicArr2D);
var matrix = [
    [1, 2]
];
//console.log('matrix','Rows', matrix.length,'Col', matrix[0].length)
function transposeMatrix(matrix) {
    // Write your code here.
    var transposeMatrix = [];
    var rows = matrix.length;
    var columns = matrix[0].length;
    for (var col = 0; col < columns; col++) {
        var newRow = [];
        for (var row = 0; row < rows; row++) {
            newRow.push(matrix[row][col]);
        }
        transposeMatrix.push(newRow);
    }
    return transposeMatrix;
}
exports.transposeMatrix = transposeMatrix;
console.log(transposeMatrix(matrix));
