export function countInversions(array: number[]) {
    // Write your code here.
    return countSubArrayInversion(array, 0 , array.length);
  }
  
  function countSubArrayInversion(array: number[], start:number, end: number ): number{
    if(end - start <= 1) return 0
    
    const mid = start + Math.floor((end - start) / 2)
    //const mid =  Math.floor((end + start) / 2)
    const leftArrayInversion = countSubArrayInversion(array, start, mid)
    const rightArrayInversion = countSubArrayInversion(array, mid, end)
    const mergedArrayInversion = mergedSortAndCountInversion(array, start, mid, end)
    return leftArrayInversion + rightArrayInversion + mergedArrayInversion
  }
  
  function mergedSortAndCountInversion(array:number[], start: number, mid: number, end: number){
    const sortedArray : number[]  = []
    let left = start
    let right = mid
    let inversions = 0
  
    while (left < mid && right < end){
      if(array[left] <= array[right]){
        sortedArray.push(array[left])
        left++
      }else{
        inversions += mid - left
        sortedArray.push(array[right])
        right++
      }
    }
  
    sortedArray.push(...array.slice(left, mid), ...array.slice(right, end))
    
    for( let i =0 ; i< sortedArray.length; i++){
      array[start + i] = sortedArray[i]
    }
    return inversions
  }
  