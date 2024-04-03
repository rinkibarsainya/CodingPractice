const NestingScore = (s: string )=>{
    const stack =[0];
    console.log('stack', stack)
    for(let char of s){
        if(char === '[') stack.push(0);
        else if( char === ']'){
            // pop element
            let popped =   stack.pop();
            if(popped == 0){
               stack[stack.length-1] += 1;
            }else {
               stack[stack.length -1] = popped * 2;
            }
        }

    }
    return stack[0];
}
console.log('Nesting Score', NestingScore('[[][][]]'));
