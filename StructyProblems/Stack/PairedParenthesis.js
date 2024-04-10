var PairedParenthesis = function (s) {
    var stack = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char === "(") {
            stack.push(char);
        }
        else if (char === ")") {
            stack.pop();
        }
    }
    return stack.length === 0;
};
console.log('Paired parenthesis', PairedParenthesis('(david)((abby))'));
console.log(PairedParenthesis(')('));
