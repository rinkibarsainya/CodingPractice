function Chunk(arr, size){
  const result =[];
  let index = 0;
  while( index < arr.length){
    result.push(arr.slice(index, index+size));
    index += size;
  }
  return result;
}

console.log('Chunk', Chunk([1, 2, 3, 4],2 ));
console.log('Chunk', Chunk([1, 2, 3, 4, 5,6,7,8],3 ));