//Solution1 : using regular expression
function countVowels(str){
 const matches = str.match(/[aeiou]/gi, '')
 return matches ? matches.length : 0; 
}

// Solution2: Creating array which contains vowels
function CountVowels(str){
    const vowels = ['a','e', 'i', 'o', 'u']
    let count = 0;
    for(char of str){
      if(vowels.includes(char)) count++;
    }
    return count;
}

console.log('count vowels', CountVowels('How are you doing?'))