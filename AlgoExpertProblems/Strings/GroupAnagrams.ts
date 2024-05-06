export function groupAnagrams(words: string[]) {
    const anagrams : {[key: string] : string[]} = {}
    for(const word of words){
      const sortedWord = word.split('').sort().join('')
      if(sortedWord in anagrams) {
        anagrams[sortedWord].push(word) 
      }else{
        anagrams[sortedWord] = [word]
      }
    }
    return Object.values(anagrams);
  }
  
  /*
  {
  "words": ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
}
OP : [
  ["foo"],
  ["flop", "olfp"],
  ["oy", "yo"],
  ["act", "cat", "tac"]
]
*/