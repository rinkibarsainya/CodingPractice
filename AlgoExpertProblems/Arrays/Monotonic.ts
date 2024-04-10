//Array is said to be monotonice if its element leftto right are 
//entirely non- increasing or entirely non-decreasing

export function isMonotonic(array: number[]) {
    // Write your code here.
    let isNonDecreasing = true
    let isNonIncreasing = true
    for(let i=1; i< array.length; i++){
      if(array[i] > array[i-1]) isNonIncreasing = false
      if(array[i] < array[i-1]) isNonDecreasing = false
    }
    return isNonDecreasing || isNonIncreasing;
  }
console.log('IsMonotonice', isMonotonic([1, 5, 10, 1100, 1101, 1102, 9001])) 
console.log('IsMonotonice', isMonotonic([-1, -5, -10, -1100, -1101, -1102, -9001])) 