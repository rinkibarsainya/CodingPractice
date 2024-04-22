export function bestDigits(number: string, numDigits: number) {
    // Write your code here.
    const stack : string[] = []
    
    for(const digit of number){
      while (numDigits > 0 && stack.length > 0 && digit > stack[stack.length -1]){
        numDigits--
        stack.pop()
      }
      stack.push(digit)
    }
    while(numDigits > 0){
      numDigits--
      stack.pop()
    }
    return stack.join('');
  }
  