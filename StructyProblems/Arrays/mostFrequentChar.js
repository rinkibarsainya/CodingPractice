function mostFrequentChar(s) {
    var charCount = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (!(char in charCount)) {
            charCount[char] = 0;
        }
        charCount[char] = charCount[char] + 1;
    }
    console.log('char count ==> ', charCount);
    var mostFrequentChar = null;
    for (var _a = 0, s_2 = s; _a < s_2.length; _a++) {
        var char = s_2[_a];
        console.log('most Frequent Char ===>', char, charCount[char], charCount[mostFrequentChar]);
        if (mostFrequentChar === null || charCount[char] > charCount[mostFrequentChar]) {
            mostFrequentChar = char;
        }
    }
    return mostFrequentChar;
}
console.log('most Frequent Char -->', mostFrequentChar('abbcd'));
