// creating new array : result[]
function CapitalizeString(str){
   const words = str.split(' ');
   console.log('words', words)
   const result = []
   for(word of words){
    console.log('word=>', word, word[0], word.slice(1));
     result.push(word[0].toUpperCase() + word.slice(1) )
   }
   return result.join(' ');
}

//using map 
function CapitalizeString1(str){
    const words = str.split(' ');
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
 }

console.log('Capitalize =>', CapitalizeString1("this is rinki from arc vision"));