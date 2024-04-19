// step1 . sort the interval with respect to their staring value
// step2. After sorting traverse them and at each iteration, compare start of next inteval to the end of current interval to look for overlap
// step3. If find overlap mutate the current interval

export function mergeOverlappingIntervals(array: number[][]) {
    // Write your code here.
    const sortedIntervals = array.sort((a,b) => a[0] - b[0])
    let currentInterval = sortedIntervals[0]
    let mergedInterval: number[][] = []
    mergedInterval.push(currentInterval)
  
    for(const nextInterval of sortedIntervals){
      const [_ , currentIntervalEnd] = currentInterval
      const [nextIntervalStart, nextIntervalEnd] = nextInterval
  
      if(currentIntervalEnd >= nextIntervalStart){
        console.log('if true', currentInterval)
        currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
        console.log('Merge array',mergedInterval )
      }else{
        console.log('if false', currentInterval, nextInterval)
        currentInterval = nextInterval
        console.log('mergeInterval before ', mergedInterval)
        mergedInterval.push(currentInterval)
        console.log('mergedInterval after', mergedInterval)
      }
    }
    
    return mergedInterval;
  }
  console.log('Merge Overlapping Interval', mergeOverlappingIntervals([[1,2],[3,5], [4,7], [6,8],[9,10]]))