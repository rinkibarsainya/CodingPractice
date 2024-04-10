export function zeroSumSubarray(nums: number[]) {
    // Write your code here.
    const sum = new Set([0])
    let currentSum = 0
    for(const num of nums){
      currentSum += num
      if(sum.has(currentSum)) return true
        sum.add(currentSum)
    }
    return false;
  }