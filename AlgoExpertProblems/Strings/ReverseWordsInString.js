"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWordsInString = void 0;
function reverseWordsInString(string) {
    var words = [];
    var startOfWord = 0;
    for (var i = 0; i < string.length; i++) {
        var character = string[i];
        if (character === ' ') {
            words.push(string.slice(startOfWord, i));
            startOfWord = i;
        }
        else if (string[startOfWord] === ' ') {
            words.push(' ');
            startOfWord = i;
        }
    }
    words.push(string.slice(startOfWord));
    reverseList(words);
    return words.join('');
}
exports.reverseWordsInString = reverseWordsInString;
function reverseList(list) {
    var start = 0, end = list.length - 1;
    while (start < end) {
        var temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end--;
    }
}
reverseWordsInString("AlgoExpert is the best!");
