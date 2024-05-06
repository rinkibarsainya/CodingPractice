export function sortedSquaredArray(array: number[]) {
    const sortedArray = new Array(array.length).fill(0)
  
    let smallIdx = 0
    let largeIdx = array.length - 1
  
    for(let i = array.length - 1; i >=0; i--){
      const smallValue = array[smallIdx]
      const largeValue = array[largeIdx] 
      
      if(Math.abs(smallValue) > Math.abs(largeValue)){
         sortedArray[i] = smallValue * smallValue
         smallIdx++
      }
       
      else{
         sortedArray[i] = largeValue * largeValue
        largeIdx--
      }
       
    }
    
    return sortedArray;
  }
  