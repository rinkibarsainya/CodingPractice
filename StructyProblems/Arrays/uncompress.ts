function unCompressString(s:string)
{
    let outputString: string = "";
    let numberString : string = "";
    let i = 0;
    let counter = 0;
    for(i=0; i<s.length; i++){
        if(isCharNumber(s[i])){
            numberString = numberString.concat(s[i]);
        }else{
            counter = parseInt(numberString);
            let j=0;
            for(j=0; j<counter; j++){
                outputString= outputString.concat(s[i].toString());
            }
            numberString = "";
            counter =0;
        }
    }
    return outputString;
}

function isCharNumber(c) {
    return typeof c === 'string' && c.length === 1 && c >= '0' && c <= '9';
}

console.log("unCompressString string 3a5b2c---->", unCompressString("3a5b2c"));
