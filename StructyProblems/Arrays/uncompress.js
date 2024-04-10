function compressString(s) {
    var outputString = "";
    var numberString = "";
    var i = 0;
    var counter = 0;
    for (i = 0; i < s.length; i++) {
        if (isCharNumber(s[i])) {
            console.log('numberString--->', numberString);
            numberString = numberString.concat(s[i]);
        }
        else {
            counter = parseInt(numberString);
            var j = 0;
            console.log('counter--->', counter);
            for (j = 0; j < counter; j++) {
                outputString = outputString.concat(s[i].toString());
                console.log('outputString----->', outputString);
            }
            numberString = "";
            counter = 0;
        }
    }
    return outputString;
}
function isCharNumber(c) {
    return typeof c === 'string' && c.length === 1 && c >= '0' && c <= '9';
}
console.log("compress string---->", compressString("3a5b2c"));
