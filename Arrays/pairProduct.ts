const pairProduct = (numbers: number[], targetProduct: number): number[] => {
    let outputArray ={};
    for(let i =0; i<numbers.length; i++){
        // product p = x*y;
        let x = numbers[i];
        let y = targetProduct/x;
        if(y in outputArray) return [outputArray[y], i];
        outputArray[x] = i;
    }
}

console.log('pairProduct-->', pairProduct([3,2,5,4,1],8))