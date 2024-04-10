export function missingNumbers(nums: number[]) {
    // Write your code here.
    //step1 : convert input array into unique array using Set()
    const uniqueNums = new Set(nums)
    let missingNums: number[] =[]

    for(let num=1; num< nums.length +3; num++){
      if(!uniqueNums.has(num)){ // if number not in unique/input array
         missingNums.push(num) 
      }
    }
    return missingNums;
  }
  