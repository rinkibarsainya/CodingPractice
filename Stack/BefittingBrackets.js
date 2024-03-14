var brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
};
var BefittingBrackets = function (s) {
    var stack = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char in brackets) {
            stack.push(brackets[char]);
        }
        else if (stack.length > 0 && stack[stack.length - 1] === char) {
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
