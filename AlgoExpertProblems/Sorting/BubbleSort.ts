export function bubbleSort(array: number[]) {
    // Write your code here.
    let isSorted = false
    let counter = 0
    
    while(!isSorted){
      isSorted = true
      for(let i=0; i<array.length -1 - counter; i++){
        if(array[i] > array[i+1]){
          const temp = array[i]
          array[i] = array[i+1]
          array[i+1] = temp
          isSorted = false
        }
      }
      counter++
    }
    return array;
  }
  