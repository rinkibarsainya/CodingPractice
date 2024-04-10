export function majorityElement(array: number[]) {
    // Write your code here.
    let count = 0
    let majorityElem : number | null = null
  
    for ( const value of array){
      if(count === 0) majorityElem = value
  
      if(value === majorityElem) count++
      else count--
    }
    return majorityElem;
  }
  