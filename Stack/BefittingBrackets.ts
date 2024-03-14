const brackets ={
    '(': ')',
    '[': ']',
    '{': '}',
}
const BefittingBrackets = (s:string) => {
    const stack =[];
    for(let char of s){
        if(char in brackets){
            stack.push(brackets[char]);
        }else if(stack.length > 0 && stack[stack.length-1] === char){
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
}

console.log('Befitting Brackets', BefittingBrackets('(){}[](())'));
console.log('Befitting Brackets', BefittingBrackets('(){}[](()'));