export function reverseWordsInString(string: string) {
    const words : string[] = []
    let startOfWord = 0
  
    for(let i = 0; i < string.length; i++){
      const character = string[i]
      if(character === ' '){
        words.push(string.slice(startOfWord, i))
        startOfWord = i
      }else if(string[startOfWord] === ' '){
        words.push(' ')
        startOfWord = i
      }
    }
    words.push(string.slice(startOfWord))
    reverseList(words)
    return words.join('');
  }
  
  function reverseList(list: string[]){
    let start = 0, end = list.length - 1
    while(start < end){
      const temp = list[start]
      list[start] = list[end]
      list[end] = temp
      start++
      end--
    }
    
  }
  
  reverseWordsInString("AlgoExpert is the best!")