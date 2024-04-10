export function longestSubarrayWithSum(array: number[], targetSum: number) {
    // Write your code here.
    let indices : number[] = []
    let currentSum = 0
    let startIdx =0
    let endIdx =0
    while(endIdx < array.length){
      currentSum += array[endIdx]
      console.log('before curent Sum and startIdx and endIdx',currentSum, startIdx, endIdx )
      while(startIdx < endIdx && currentSum > targetSum ){
        
        currentSum -= array[startIdx]
        startIdx++
        console.log('After currentSum and startIndex', currentSum, startIdx, endIdx)
      }
  
      if(currentSum === targetSum){
        
        if(indices.length === 0 || indices[1] - indices[0] < endIdx -startIdx){
          indices = [startIdx, endIdx]
        }
        console.log('sum matched', indices)
      }
      endIdx++
      
    }
    return indices;
  }
  console.log('longestSubarrayWithSum', longestSubarrayWithSum([1,2,3,4,3,3,1,2,1,2], 10))