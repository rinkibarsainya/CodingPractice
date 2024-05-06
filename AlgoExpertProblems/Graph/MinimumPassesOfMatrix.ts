export function minimumPassesOfMatrix(matrix: number[][]) {
    const passes = convertNegatives(matrix) 
    return !containsNegative(matrix) ? passes - 1 : -1
   }
   
   function convertNegatives(matrix: number[][]){
     const queue = getAllPositivePosition(matrix)
     let passes = 0
     
     while(queue.length > 0){
   
       let currentSize = queue.length
   
       while(currentSize > 0){
         const [currentRow, currentCol] = queue.shift()!
   
         const adjacentPositions = getAdjacentPostions(currentRow, currentCol, matrix)
         for(const adjacentPosition of adjacentPositions){
           const [row, col] = adjacentPosition
           const value = matrix[row][col]
   
           if(value < 0){
             matrix[row][col] *= -1
             queue.push([row, col])
           }
         }
         currentSize--
       }
        passes++
     }
    return passes
   }
   
   function getAdjacentPostions(row:number, col:number, matrix: number[][]){
     const adjacentPositions: [number, number][] = []
     
     if(row > 0) adjacentPositions.push([row - 1, col])
     if(row < matrix.length - 1) adjacentPositions.push([row + 1, col])
     if(col > 0) adjacentPositions.push([row, col - 1])
     if(col < matrix[0].length - 1) adjacentPositions.push([row, col + 1])
     return adjacentPositions
   }
   
   function getAllPositivePosition(matrix: number[][]){
     const positivePositions : [number, number][] = []
     for(let row =0; row < matrix.length; row++){
       for(let col= 0; col < matrix[0].length; col++ ){
         if(matrix[row][col] > 0) positivePositions.push([row, col])
       }
     }
     return positivePositions
   }
   
   function containsNegative(matrix: number[][]){
     for(const row of matrix){
       for(const value of row){
         if(value < 0) return true
       }
     }
     return false
   }

   /* 
   {
  "matrix": [
    [0, -1, -3, 2, 0],
    [1, -2, -5, -1, -3],
    [3, 0, 0, -4, -1]
  ]
}
o/p : 3
*/
