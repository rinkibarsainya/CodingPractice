

function CharMap(str){
    const charMap ={}
    str = str.toLowerCase().replace('/[\W]/g', '')
    for(let char of str){
        charMap[char] = charMap[char]+ 1 || 1;
    }
    return charMap;
}

function IsAnagram(str1, str2){
   const charMapA = CharMap(str1); // build char map for str1
   const charMapB = CharMap(str2) // build char map for str2
   console.log(charMapA, charMapB);

   
   if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false
   // compare each char in both charmap array
   for(key in charMapA){
    if(charMapA[key] !== charMapB[key]) return false;
   }
   return true;
}

function sortString(str){
   const newStr = str.toLowerCase().replace(/[\W]/g, '')
   console.log('new str', newStr)
   return newStr.split('').sort().join('');
}

function IsAnagramv2(str1, str2){
  return sortString(str1) === sortString(str2)
}

console.log('isAnagram ==>', IsAnagramv2('restful!', 'fluster'))