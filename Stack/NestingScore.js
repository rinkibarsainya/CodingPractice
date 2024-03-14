var NestingScore = function (s) {
    var stack = [0];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (char === '[')
            stack.push(0);
        else if (char === ']') {
            // pop element
            var popped = stack.pop();
            var score = 0;
            if (popped == 0) {
                stack[stack.length - 1] += 1;
            }
            else {
                stack[stack.length - 1] = popped * 2;
            }
        }
    }
    return stack[0];
};
console.log('Nesting Score', NestingScore('[[][][]]'));
