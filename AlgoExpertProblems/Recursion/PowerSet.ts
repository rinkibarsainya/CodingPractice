export function powerset(array: number[]) {
    const subset : number[][] = [[]]
    for(const elem of array){
      const length = subset.length
      for(let i = 0; i < length ; i++){
         const newSubset = subset[i]
         subset.push(newSubset.concat(elem))
      }
    }
    return subset;
  }

  //////  Using Recursion /////

  export function powerset1(array: number[], idx: number | null = null) : number[][]{
    if(idx === null)
      idx = array.length - 1
    if(idx < 0) return [[]]
    const elem = array[idx]
    const subsets = powerset1(array, idx - 1 )
    const length = subsets.length
    for(let i = 0; i < length; i++){
      const currentSubset = subsets[i]
      subsets.push(currentSubset.concat(elem))
    }
    return subsets;
  }
  
  //"array": [1, 2, 3]
  /*
  [
  [],
  [1],
  [2],
  [1, 2],
  [3],
  [1, 3],
  [2, 3],
  [1, 2, 3]
]

Your Code's Output

[
  [],
  [1],
  [2],
  [1, 2],
  [3],
  [1, 3],
  [2, 3],
  [1, 2, 3]
]

*/