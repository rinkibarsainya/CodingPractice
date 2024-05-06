interface TrieNode {
    [key: string] : TrieNode
  }
  class SuffixTrie {
    root: TrieNode
  
    constructor(string: string){
      this.root = {}
      this.buildSuffixTrie(string)
      
    }
  
    buildSuffixTrie(string : string){
     for(let i =0; i < string.length; i++){
       this.insertSubstringStartingAt(i, string)
     }
    }
  
    insertSubstringStartingAt(i: number, string: string){
      let node = this.root
      for(let j= i; j < string.length; j++){
        const letter = string[j]
        if(!(letter in node)) node[letter] = {}
        node = node[letter] 
      }
    }
    
    contain(string: string){
      let node = this.root
      for(const letter of string){
         if(!(letter in node)) return false
          node = node[letter]
      }
     return true
    }
  }
  export function multiStringSearch(bigString: string, smallStrings: string[]) {
    const suffixTrie = new SuffixTrie(bigString)
    const resultArray = smallStrings.map(smallString => suffixTrie.contain(smallString))
    return resultArray;
  }
/*
{
  "bigString": "this is a big string",
  "smallStrings": ["this", "yo", "is", "a", "bigger", "string", "kappa"]
}
[true, false, true, true, false, true, false]
*/  