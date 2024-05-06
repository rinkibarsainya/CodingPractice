export function riverSizes(matrix: number[][]) {
    const sizes : number[] = []
    const visited : boolean[][] = matrix.map(row => row.map(value => false))
  
    for(let row = 0; row < matrix.length; row++){
      for(let col = 0; col <  matrix[0].length; col++){
        traverseNode(row, col, matrix, visited, sizes)
      }
    }
    return sizes;
  }
  
  function traverseNode(i: number, j: number, matrix: number[][], visited: boolean[][], sizes: number[] ){
    let currentRiverSize = 0
    const nodeToExplore = [[i, j]]
    
    while(nodeToExplore.length > 0){
      const currentNode = nodeToExplore.pop()!
       i = currentNode[0]
       j = currentNode[1]
  
      if(visited[i][j]) continue
      visited[i][j] = true
  
      if(matrix[i][j] === 0) continue
      currentRiverSize++
  
      const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited)
  
      for (const neighbor of unvisitedNeighbors){
        nodeToExplore.push(neighbor)
      }
    }
     if(currentRiverSize > 0) sizes.push(currentRiverSize)
  }
  
  function getUnvisitedNeighbors(i:number, j:number, matrix:number[][], visited: boolean[][]){
    const unvisitedNeighbors : [number, number][] = []
    if(i > 0 && !visited[i-1][j]) unvisitedNeighbors.push([i-1, j])//up
    if(i < matrix.length - 1 && !visited[i+1][j]) unvisitedNeighbors.push([i+1,j]) //down
    if(j > 0 && !visited[i][j-1]) unvisitedNeighbors.push([i,j-1]) //left
    if(j < matrix[0].length - 1 && !visited[i][j+1]) unvisitedNeighbors.push([i,j+1]) //right
    return unvisitedNeighbors
  }
  
  /*
 I/P:
  {
  "matrix": [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0]
  ]
}
O/P : [2, 1, 5, 2, 2]
*/