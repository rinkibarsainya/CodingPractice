var intersection = function (a, b) {
    var result = [];
    var setA = new Set(a);
    for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
        var item = b_1[_i];
        if (setA.has(item))
            result.push(item);
    }
    return result;
};
console.log('intersection===>', intersection([4, 2, 6], [3, 6, 9, 2, 10]));
