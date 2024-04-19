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