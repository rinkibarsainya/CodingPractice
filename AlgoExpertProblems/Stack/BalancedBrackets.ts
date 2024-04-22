export function balancedBrackets(string: string) {
    const openingBrackets = '([{'
    const closingBrackets = ')]}'
    const matchingBrackets : {[key: string] : string} = {
       ')': '(',
       ']': '[',
       '}': '{',
     }
     const stack : string[] = []
     
     for(let char of string){
       
       if(openingBrackets.includes(char)){
         stack.push(char)
       } else if(closingBrackets.includes(char))
       {
         if(stack.length !== 0 && stack[stack.length -1] === matchingBrackets[char]) {
           stack.pop()
         } else {
           return false
         }
       }
     }
   
     return stack.length === 0;
   }
   //(141[])(){waga}((51afaw))()hh() - true
   //[((([])([]){}){}){}([])[]((()) - false
   //[](){} - true