//Array is said to be monotonice if its element leftto right are 
//entirely non- increasing or entirely non-decreasing

export function isMonotonic(array: number[]) {
  let  isIncreasing = true
  let  isDecreasing = true

  for(let i = 1; i < array.length; i++){
    if(array[i] > array[i - 1])  isDecreasing = false
    if(array[i] < array[i -1]) isIncreasing = false
  }
  return isIncreasing || isDecreasing;
}

console.log('IsMonotonice', isMonotonic([1, 5, 10, 1100, 1101, 1102, 9001])) 
console.log('IsMonotonice', isMonotonic([-1, -5, -10, -1100, -1101, -1102, -9001])) 