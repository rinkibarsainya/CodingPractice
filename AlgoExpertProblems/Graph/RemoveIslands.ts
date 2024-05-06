export function removeIslands(matrix: number[][]) {
    const auxiliaryMatrix : boolean[][] = []
    //1. copy matrix array into auxiliaryMatrix array with all false value
    for(let row = 0; row < matrix.length; row++){
        auxiliaryMatrix.push([])
      for(let col = 0; col < matrix[0].length; col++){
        auxiliaryMatrix[row].push(false)
      }
    }
  
    //2. find ones connected to border or edges
    for(let row = 0; row < matrix.length; row++){
      for(let col = 0; col < matrix[row].length; col++){
        //check boundary condition
        const isRowBorder = row === 0 || row === matrix.length -1
        const isColsBorder = col === 0 || col === matrix[row].length - 1
        const isBoundary = isRowBorder || isColsBorder 
        if(!isBoundary) continue
  
        if(matrix[row][col] !== 1) continue
        //if(isRowBorder || isColsBorder || matrix[row][col] === 1)
        findOnesConnectedToBorder(matrix, row, col, auxiliaryMatrix)
      }
    }
    //3. iterate through the matrix with except boundary and replace with 0 true column
  
    for(let row = 1; row < matrix.length - 1; row++){
      for(let col = 1; col < matrix[row].length -1; col++){
         if(auxiliaryMatrix[row][col])continue
         matrix[row][col] = 0
      }
    }
    
    return matrix;
  }
  
  function findOnesConnectedToBorder(matrix: number[][], row:number, col: number, auxiliaryMatrix: boolean[][]){
    const stack = [[row, col]]
  
    while(stack.length > 0){
      const [currentRow, currentCol] = stack.pop()!
  
      const alreadyVisited = auxiliaryMatrix[currentRow][currentCol]
  
      if(alreadyVisited) continue
      
      auxiliaryMatrix[currentRow][currentCol] = true
      
      const neighbors = getNeighbors(matrix, currentRow, currentCol)
      
      for(const neighbor of neighbors){
        const [row, col] = neighbor
        if(matrix[row][col] === 1) stack.push(neighbor)
      }
    }
  }
  
  function getNeighbors(matrix: number[][], row: number, col: number): number[][]{
    const neighbors : number[][] = []
    
    const rows = matrix.length
    const cols = matrix[row].length
  
    if(row - 1 >= 0) neighbors.push([row - 1, col])
    if(row + 1 <  rows) neighbors.push([row + 1, col])
    if(col - 1 >= 0) neighbors.push([row, col - 1])
    if(col + 1 < cols) neighbors.push([row, col + 1])
  
    return neighbors;
  }

  /*"matrix": [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1]
  ]*/

  /* o/p 
  [
  [1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1]
]
  */

////////////////// Modified by Rinki //////////////////////

/*export function removeIslands(matrix: number[][]) {
    const auxiliaryMatrix : boolean[][] = []
    //1. copy matrix array into auxiliaryMatrix array with all false value
    for(let row = 0; row < matrix.length; row++){
        auxiliaryMatrix.push([])
      for(let col = 0; col < matrix[0].length; col++){
        auxiliaryMatrix[row].push(false)
      }
    }
  
    //2. find ones connected to border or edges
    for(let row = 0; row < matrix.length; row++){
      for(let col = 0; col < matrix[row].length; col++){
        //check boundary condition
        const isRowBorder = row === 0 || row === matrix.length -1
        const isColsBorder = col === 0 || col === matrix[row].length - 1
        const isBoundary = isRowBorder || isColsBorder 
        //if(!isBoundary) continue
  
        //if(matrix[row][col] !== 1) continue
        if((isRowBorder || isColsBorder) && matrix[row][col] === 1){
          findOnesConnectedToBorder(matrix, row, col, auxiliaryMatrix)
        }
          
      }
    }
    //3. iterate through the matrix with except boundary and replace with 0 true column
  
    for(let row = 1; row < matrix.length - 1; row++){
      for(let col = 1; col < matrix[row].length -1; col++){
         if(auxiliaryMatrix[row][col])continue
         matrix[row][col] = 0
      }
    }
    
    return matrix;
  }
  
  function findOnesConnectedToBorder(matrix: number[][], row:number, col: number, auxiliaryMatrix: boolean[][]){
    const stack = [[row, col]]
  
    while(stack.length > 0){
      const [currentRow, currentCol] = stack.pop()!
  
      const alreadyVisited = auxiliaryMatrix[currentRow][currentCol]
  
      if(!alreadyVisited) {
      auxiliaryMatrix[currentRow][currentCol] = true
      
      const neighbors = getNeighbors(matrix, currentRow, currentCol)
      
      for(const neighbor of neighbors){
        const [row, col] = neighbor
        if(matrix[row][col] === 1) stack.push(neighbor)
      }
      }
      
      
    }
  }
  
  function getNeighbors(matrix: number[][], row: number, col: number): number[][]{
    const neighbors : number[][] = []
    
    const rows = matrix.length
    const cols = matrix[row].length
  
    if(row - 1 >= 0) neighbors.push([row - 1, col])
    if(row + 1 <  rows) neighbors.push([row + 1, col])
    if(col - 1 >= 0) neighbors.push([row, col - 1])
    if(col + 1 < cols) neighbors.push([row, col + 1])
  
    return neighbors;
  }
  */