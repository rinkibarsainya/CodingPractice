var brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
};
var BefittingBrackets = function (s) {
    var stack = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        console.log('char', char, brackets);
        if (char in brackets) {
            console.log('push', brackets[char]);
            stack.push(brackets[char]);
        }
        else if (stack.length > 0 && stack[stack.length - 1] === char) {
            console.log('pop', brackets[char]);
            stack.pop();
        }
        else {
            return false;
        }
    }
    return stack.length === 0;
};
console.log('Befitting Brackets', BefittingBrackets('(){}[](())'));
console.log('Befitting Brackets', BefittingBrackets('(){}[](()'));
