//Create 2D Array
const arr2D = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

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

const matrix = [
    [1, 2]
]

//console.log('matrix','Rows', matrix.length,'Col', matrix[0].length)

export function transposeMatrix(matrix: number[][]) {
    // Write your code here.
    const transposeMatrix: number[][] = []
    const rows = matrix.length
    const columns = matrix[0].length
  
    for(let col=0; col<columns; col++){
      const newRow : number[] = []
      for(let row=0; row<rows; row++){
        newRow.push(matrix[row][col])
      }
      transposeMatrix.push(newRow)
    }
    
    return transposeMatrix;
  }

  console.log(transposeMatrix(matrix))
  