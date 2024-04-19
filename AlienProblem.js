"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function matchPattern(word, pattern) {
    var regex = new RegExp("^" + pattern.replace(/\(/g, "[").replace(/\)/g, "]") + "$");
    //console.log('regex', regex, 'word', word)
    return regex.test(word);
}
function solveAlienProblem(dictionary, testCases) {
    for (var i = 0; i < testCases.length; i++) {
        var count = 0;
        var pattern = testCases[i];
        for (var _i = 0, dictionary_1 = dictionary; _i < dictionary_1.length; _i++) {
            var word = dictionary_1[_i];
            if (matchPattern(word, pattern)) {
                count++;
            }
        }
        console.log("Case #".concat(i + 1, ": ").concat(count));
    }
}
function main() {
    // Parse input
    var inputLines = [
        "3 5 4",
        "abc",
        "bca",
        "dac",
        "dbc",
        "cba",
        "(ab)(bc)(ca)",
        "abc",
        "(abc)(abc)(abc)",
        "(zyx)bc"
    ];
    var _a = inputLines[0].split(" ").map(Number), L = _a[0], D = _a[1], N = _a[2];
    var dictionary = inputLines.slice(1, D + 1);
    var testCases = inputLines.slice(D + 1);
    //console.log('dictionary and test cases', dictionary, testCases )
    solveAlienProblem(dictionary, testCases);
}
main();
