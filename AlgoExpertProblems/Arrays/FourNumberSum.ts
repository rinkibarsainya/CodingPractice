interface Pairs {
    [key: number] : [number, number][]
  }
  
  //{13: [7,6]}
  export function fourNumberSum(array: number[], targetSum: number) {
    // Write your code here.
    let allPairSum : Pairs = {}
    let quadruplets : number[][] = []
    for (let i = 1; i < array.length-1; i++){
      for (let j = i + 1; j< array.length; j++){
        let currentSum = array[i] + array[j]
        let currentDiff = targetSum - currentSum
        if(currentDiff in allPairSum){
          for(let pair of allPairSum[currentDiff]){
            quadruplets.push(pair.concat(array[i], array[j]))
          } 
        }
      }
      for (let k = 0; k < i; k++){
        let currentSum = array[i] + array[k]
        if(!(currentSum in allPairSum)){
          allPairSum[currentSum] = [[array[i], array[k]]]
        }else{
          allPairSum[currentSum].push([array[i], array[k]])
        }
      }
    }
    
    return quadruplets;
  }
  