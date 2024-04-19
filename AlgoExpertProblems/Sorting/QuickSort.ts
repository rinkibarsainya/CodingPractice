export function quickSort(array: number[]) {
    quickSortHelper(array, 0, array.length -1)
    return array;
  }
  
  function quickSortHelper(array: number[], startIdx: number, endIdx: number){
    if (startIdx >= endIdx) return
    const pivotIdx = startIdx
    let leftIdx = startIdx + 1
    let rightIdx = endIdx
  
    while(leftIdx <= rightIdx){
      if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
        swap(leftIdx, rightIdx, array)
      }
      if(array[leftIdx] <= array[pivotIdx]) leftIdx++
      if(array[rightIdx] >= array[pivotIdx]) rightIdx--  
    }
    swap(pivotIdx, rightIdx, array)
  
    const isLeftSubArraySmaller = rightIdx -1 -startIdx < endIdx - rightIdx + 1
    if(isLeftSubArraySmaller){
      quickSortHelper(array, startIdx , rightIdx - 1)
      quickSortHelper(array, rightIdx + 1, endIdx)
    }else{
      quickSortHelper(array, rightIdx + 1, endIdx)
      quickSortHelper(array, startIdx , rightIdx - 1)
    }
    
  }
  
  function swap(i: number, j : number, array: number[]){
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }