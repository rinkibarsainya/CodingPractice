function MaxChar(str){
  const charMap ={}
  let maxChar = '';
  let max = 0;
  for(char of str){
        charMap[char] = ++charMap[char] || 1
  }
  for(key in charMap){
    if(charMap[key] > max)
    {
        maxChar = key;
        max = charMap[key]
    }
  }
 return maxChar;
}

console.log('max char', MaxChar('abcccccd'));