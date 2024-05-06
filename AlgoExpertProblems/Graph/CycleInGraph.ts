export function cycleInGraph(edges: number[][]) {
    const visited = new Array(edges.length).fill(false)
    const inStack = new Array(edges.length).fill(false)
  
    for(let node = 0; node < edges.length; node++){
      if(visited[node]) continue
      const containCycle = isNodeInCycle(node, edges, visited, inStack)
      if(containCycle) return true
    }
    
    return false;
  }
  
  function isNodeInCycle(node : number, edges: number[][], visited: boolean[], inStack: boolean[]){
    visited[node] = true
    inStack[node] = true
    const neighbors = edges[node]
    for( const neighbor of neighbors){
      if(!visited[neighbor]){
        const containCycle = isNodeInCycle(neighbor, edges, visited, inStack)
        if(containCycle) return true
      }else if(inStack[neighbor]){
        return true
      }
    }
    inStack[node] = false
    return false
  }

  /*
  {
  "edges": [
    [1, 3],
    [2, 3, 4],
    [0],
    [],
    [2, 5],
    []
  ]
}
O/P: true
*/