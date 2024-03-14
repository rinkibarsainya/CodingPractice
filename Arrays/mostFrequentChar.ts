function mostFrequentChar(s:string){
    let charCount = {};
    for(let char of s) {
        if(!(char in charCount)){
            charCount[char] = 0;
        }
        charCount[char] = charCount[char]+1;
    }
    console.log('char count ==> ', charCount)
    let mostFrequentChar = null;
    for(let char of s){
        console.log('most Frequent Char ===>', char, charCount[char] , charCount[mostFrequentChar])
        if(mostFrequentChar === null || charCount[char] > charCount[mostFrequentChar])
        {
          mostFrequentChar = char;
        }
    }
    return mostFrequentChar;
}

console.log('most Frequent Char -->', mostFrequentChar('abbcd'));