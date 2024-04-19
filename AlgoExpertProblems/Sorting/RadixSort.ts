export function radixSort(array: number[]) {
    if(array.length === 0 ) return array
    let digit = 0
    const maxNum = Math.max(...array)
    while(maxNum / 10 ** digit > 0){
      countingSort(array, digit)
      digit++
    }
    return array;
  }
  
  function countingSort(array: number[], digit: number){
    const sortedArray = new Array(array.length).fill(0)
    const countArray = new Array(10).fill(0)
    let digitColumn = 10 ** digit
    for(const num of array){
      const countIdx = Math.floor(num/digitColumn) % 10
      countArray[countIdx]++
    }
  
    for(let i = 1; i<10; i++){
      countArray[i] += countArray[i-1]
    }
  
    for (let i = array.length -1; i>=0; i--){
      const countIdx = Math.floor(array[i] / digitColumn) % 10
      countArray[countIdx]--
      const sortedIdx = countArray[countIdx]
      sortedArray[sortedIdx] = array[i]
    }
  
    for ( let i =0; i < array.length; i++){
      array[i] = sortedArray[i]
    }
  
    
  }