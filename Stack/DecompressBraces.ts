const numbers = "123456789";
const DecompressBraces =(s: string) => {
    const stack = [];

    for(let char of s){
        if(numbers.includes(char)){
            stack.push(Number(char));
        }else if(char === '}'){
            let segment ='';
            while(typeof stack[stack.length-1] !== 'number'){
                const poppedElement = stack.pop();
                segment = poppedElement + segment;
            }
            const num = stack.pop();
            stack.push(repeat(segment,num));
        }else if(char !== '{'){
            stack.push(char);
        }
    }
    return stack.join('');
}

const repeat = (segment: string, num: number) => {
    let result = '';
    for(let i=0; i<num; i++){
        result += segment;
    }
    return result;
}

console.log('Decompress brackets', DecompressBraces('2{q}3{tu}v'));