"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caesarCipherEncryptor = void 0;
function caesarCipherEncryptor(string, key) {
    var resultArray = [];
    var newKey = key % 26;
    for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
        var letter = string_1[_i];
        resultArray.push(getNewLetter(letter, key));
    }
    return resultArray.join('');
}
exports.caesarCipherEncryptor = caesarCipherEncryptor;
function getNewLetter(letter, key) {
    console.log('letter', letter);
    var newLetterCode = letter.charCodeAt(0) + key;
    var newLetter = newLetterCode <= 122
        ? String.fromCharCode(newLetterCode)
        : String.fromCharCode(96 + (newLetterCode % 122));
    console.log('newLeter', newLetter);
    return newLetter;
}
console.log('caesarCipherEncryptor', caesarCipherEncryptor('abc', 52));
