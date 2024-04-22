export function nextGreaterElement(array: number[]) {
    const result = new Array(array.length).fill(-1)
    const length = array.length * 2
    const stack : number[] = []
  
    for(let i = 0; i < length; i++){
      const circularIdx = i % array.length
      while(stack.length > 0 && array[circularIdx] > array[stack[stack.length-1]]){
        const top = stack.pop()!
        result[top] = array[circularIdx]
      }
      stack.push(circularIdx)
    }
    
    return result;
  }
  
  //Ip "array": [2, 5, -3, -4, 6, 7, 2]
  //op [5, 6, 6, 6, 7, -1, 5]