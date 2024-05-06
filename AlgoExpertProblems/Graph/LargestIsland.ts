export function largestIsland(matrix: number[][]) {
    const landSizes : number[] = []
    let landNumber = 2
    for(let row = 0; row < matrix.length; row++){
      for(let col = 0; col < matrix[row].length; col++){
        if(matrix[row][col] === 0){
           landSizes.push(getSizesFromNode(row, col, matrix, landNumber))
           landNumber += 1
        }
      }
    }
    let maxSize = 0
  
    for( let row = 0; row < matrix.length; row++){
      for(let col = 0; col < matrix[row].length; col++){
        
        if(matrix[row][col] === 1){
          
          const landNeighbors = getLandNeighbors(row, col, matrix)
          const islands = new Set<number>()
          
          for(const neighbor of landNeighbors){
            islands.add(matrix[neighbor[0]][neighbor[1]])
          }
          let size = 1
          for (const island of islands){
            size += landSizes[island - 2]
          }
          maxSize = Math.max(maxSize, size)
        }
      }
    }
    return maxSize;
  }
  
  function getSizesFromNode(row: number, col: number, matrix:number[][], landNumber:number){
    let size = 0
    const nodeToExplore = [[row, col]]
    
    while(nodeToExplore.length > 0){
      const currentNode = nodeToExplore.pop()!
      const [currentRow, currentCol] = currentNode
  
      if(matrix[currentRow][currentCol] === 0){
        matrix[currentRow][currentCol] = landNumber
        size += 1
        //const neighbors = getLandNeighbors(currentRow, currentCol, matrix)
        nodeToExplore.push(...getLandNeighbors(currentRow, currentCol, matrix))
      }
      
    }
    return size
  }
  
  function getLandNeighbors(row:number, col: number, matrix: number[][]){
    const neighbors : [number, number][] = []
    //up
    if(row > 0 && matrix[row - 1][col] !== 1) neighbors.push([row - 1, col])
    if(row < matrix.length - 1 && matrix[row + 1][col] !== 1) neighbors.push([row + 1, col])
    if(col > 0 && matrix[row][col - 1] !== 1) neighbors.push([row, col - 1])
    if(col  < matrix[0].length - 1 && matrix[row][col + 1] !== 1) neighbors.push([row , col + 1])
    
    return neighbors
  }
/*
{
  "matrix": [
    [0, 1, 0],
    [1, 0, 1],
    [1, 0, 1]
  ]
}
o/p : 5
*/  