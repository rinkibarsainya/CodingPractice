interface TrieNode {
    [key: string]: TrieNode | boolean;
  }
  
  // Do not edit the class below except for the
  // populateSuffixTrieFrom and contains methods.
  // Feel free to add new properties and methods
  // to the class.
  export class SuffixTrie {
    root: TrieNode;
    endSymbol: string;
  
    constructor(string: string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string: string) {
      for(let i = 0; i < string.length; i++){
        this.insertSubStringStartingAt(i, string)
      }
    }
  
    insertSubStringStartingAt(i: number, string: string){
      let currentNode = this.root
        for(let j = i; j < string.length; j++){
          if(!(string[j] in currentNode)) currentNode[string[j]] = {}
          currentNode = currentNode[string[j]] as TrieNode
        }
        currentNode[this.endSymbol] = true
    }
  
    contains(string: string) {
      let node = this.root
      for(const letter of string)
      {
        if(!(letter in node)) return false
        node = node[letter] as TrieNode
      } 
      return this.endSymbol in node;
    }
  }
  