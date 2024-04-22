export function reversePolishNotation(tokens: string[]) {
    const stack : number[] = []
    for (const token of tokens){
      if(token === '+'){
        stack.push(stack.pop()! + stack.pop()!)
      }else if(token === '-'){
         const firstNum = stack.pop()!
        stack.push(stack.pop()! - firstNum )
      }else if(token === '*'){
        stack.push(stack.pop()! * stack.pop()!)
      }else if(token === '/'){
        const firstNum = stack.pop()! 
        stack.push(Math.trunc(stack.pop()! / firstNum ))
      }else{
        stack.push(parseInt(token))
      }
    }
    return stack.pop();
  }
  //"tokens": ["10", "5", "+"] o/p  15
  //"tokens": ["3", "2", "+", "7", "*"] => 35 (3+2 ) * 7