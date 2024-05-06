export function selectionSort(array: number[]) {
    let startIdx = 0
    while ( startIdx < array.length -1){
      let smallIdx = startIdx
      for(let i = startIdx + 1; i< array.length; i++){
        if(array[smallIdx] > array[i]) smallIdx = i
      }
      swap(smallIdx, startIdx, array)
      startIdx++
    }
  return array;
}

function swap(smallIdx: number, startIdx: number, array: number[]){
  const temp = array[smallIdx]
  array[smallIdx] = array[startIdx]
  array[startIdx] = temp
}
///////////////////// Rinki ////////////////////////
export function selectionSortNew(array: number[]) {
  let startIdx = 0
  while(startIdx < array.length - 1) {
    for(let i = startIdx + 1; i < array.length; i++)
    {
      let smallIdx = startIdx
      if(array[smallIdx] > array[i])
       swap(smallIdx, i, array)
    }
    startIdx++
  }
  
  return array;
}



selectionSort([8,5,2,9,5,6,3])