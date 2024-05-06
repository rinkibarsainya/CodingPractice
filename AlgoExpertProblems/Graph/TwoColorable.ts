export function twoColorable(edges: number[][]) {
    //const colors : Array<null | boolean> = edges.map(_ => null) 
    const colors = new Array(edges.length).fill(null)
    colors[0] = true
    const stack = [0]
  
    while(stack.length > 0){
      const node = stack.pop()!
      for(const connection of edges[node]){
        if(colors[connection] === null){
           colors[connection] = !colors[node]
           stack.push(connection)
        }else if(colors[connection] === colors[node]){
          return false
        }
      }
    }
    
    return true;
  }
  
/*
{
  "edges": [
    [1, 2],
    [0, 2],
    [0, 1]
  ]
}
O/P : false
*/  

twoColorable([
  [1, 2],
  [0, 2],
  [0, 1]
])