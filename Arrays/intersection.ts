const intersection = (a:number[], b:number[]) => {
  const result = [];
  const setA = new Set(a);
  for(let item of b){
   if(setA.has(item)) result.push(item);
  }
  return result;
}

console.log('intersection===>', intersection([4,2,6], [3,6,9,2,10]))