var numbers = "123456789";
var DecompressBraces = function (s) {
    var stack = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (numbers.includes(char)) {
            stack.push(Number(char));
            console.log('if elem is number', stack);
        }
        else if (char === '}') {
            var segment = '';
            while (typeof stack[stack.length - 1] !== 'number') {
                var poppedElement = stack.pop();
                segment = poppedElement + segment;
            }
            var num = stack.pop();
            stack.push(repeat(segment, num));
            console.log('char is }', stack);
        }
        else if (char !== '{') {
            stack.push(char);
            console.log('char is {', stack);
        }
    }
    console.log('final output', stack.join(''));
    return stack.join('');
};
var repeat = function (segment, num) {
    var result = '';
    for (var i = 0; i < num; i++) {
        result += segment;
    }
    return result;
};
console.log('Decompress brackets', DecompressBraces('2{q}3{tu}v'));
