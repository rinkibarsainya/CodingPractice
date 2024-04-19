export function commonCharacters(strings: string[]) {
    const charactersCounts : { [key: string] : number} = {}
    for(const string of strings){
      const uniqueCharacters = new Set(string)
      for(const char of uniqueCharacters){
        if(char in charactersCounts){
          charactersCounts[char]++ 
        }else{
          charactersCounts[char] = 1
        }
      }
     }
      const result = []
      for(const [character, count] of Object.entries(charactersCounts)){
        if(count === strings.length)
          result.push(character)
      }
    
    return result;
  }
  