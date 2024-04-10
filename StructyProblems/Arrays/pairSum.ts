function pairSum(numbers:number[], targetSum: number): number[]{
    let obj ={};
    for(let i=0; i<numbers.length; i++){
        // sum = x + y;
        let x = numbers[i];
        let y = targetSum- x;
        if(y in numbers) return [i, obj[y]];
        obj[x] = i;
    }
}

console.log('pairSum ====>', pairSum([3,2,5, 4,1], 8));