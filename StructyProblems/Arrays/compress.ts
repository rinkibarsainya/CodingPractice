function compressString(s:string)
{
    let outputString: string = "";
    let i =1;
    let counter = 1;
    for(i=1; i<s.length; i++){
        if(s[i-1] === s[i]){
            counter = counter+1;
        }else{
            const newString = counter === 1 ? s[i-1] : counter+s[i-1];
            outputString = outputString.concat(newString);
            counter = counter>1 ? 1: counter;
        }
    }
    return counter > 1 ? outputString.concat(counter + s[i - 1]) : outputString.concat(s[i - 1]);
}



console.log("compress string---->", compressString("ccaaatssss"));
console.log("compress string---->", compressString("aabbdfgtt"));
console.log("compress string---->", compressString("aaabbbbbcc"));
console.log("compress string---->", compressString("cdrrrtttuuo"));


