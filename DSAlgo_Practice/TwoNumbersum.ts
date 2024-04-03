function TwoNumberSum(nums: number[], target :number){
    const obj: {[key:number]:number} ={}
    
    for(let i=0; i<nums.length; i++){
       
        // sum = x+y
        
        const x = nums[i];
        const y = target - x;

        if(y in obj) {
           return [i, obj[y]]
        }else{
            obj[x] = i;
        }
          console.log(obj)
    }
    return [-1, -1]
}

//console.log('Two Number Sum', TwoNumberSum([2,7,11,15], 9)) 
//console.log('Two number sum', TwoNumberSum([3,2,5, 4,1], 8))

//Two number using two pointer 

function TwoNumberSum1(numArray: number[], targetNum :number){
    let left = 0;
    let right = numArray.length-1;

    while(left < right){
        const currentSum = numArray[left] + numArray[right]
        if(currentSum === targetNum) return [left, right];
        if(currentSum < targetNum) left++;
        if(currentSum > targetNum) right--;
    }
    return [];
}
console.log('TwoNumberSum', TwoNumberSum1([2, 7, 11, 15], 9));
console.log('Two number sum =>', TwoNumberSum([3,2,5, 4,1], 8))