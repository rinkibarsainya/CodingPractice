export function bestSeat(seats: number[]) {
    // Write your code here.
    let bestSeat = -1
    let maxSpace = 0
    let left = 0
    while(left < seats.length){
      let right = left + 1
      while(right < seats.length && seats[right] === 0){
        right += 1
      }
  
      const availableSpace = right - left -1
      if (availableSpace > maxSpace){
        maxSpace = availableSpace
        bestSeat = Math.floor((left + right)/2)
      }
      left = right
    }
    return bestSeat;
  }
  