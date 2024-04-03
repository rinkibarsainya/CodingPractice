const brackets ={
    '(': ')',
    '[': ']',
    '{': '}',
}
const BefittingBrackets = (s:string) => {
    const stack =[];
    for(let char of s){
        console.log('char', char, brackets)
        if(char in brackets){
            console.log('push', brackets[char] )
            stack.push(brackets[char]);
        }else if(stack.length > 0 && stack[stack.length-1] === char){
            console.log('pop', brackets[char] )
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
}

console.log('Befitting Brackets', BefittingBrackets('(){}[](())'));
console.log('Befitting Brackets', BefittingBrackets('(){}[](()'));