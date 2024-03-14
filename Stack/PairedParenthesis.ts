const PairedParenthesis = (s: string) => {
  const stack = [];
  for(let char of s){
      if(char === "("){
          stack.push(char);
      }else if(char === ")"){
          stack.pop();
      }
  }
  return stack.length === 0;
}

console.log('Paired parenthesis',PairedParenthesis('(david)((abby))'));
console.log(PairedParenthesis(')('));