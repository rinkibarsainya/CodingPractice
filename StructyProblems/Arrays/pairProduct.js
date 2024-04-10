var pairProduct = function (numbers, targetProduct) {
    var outputArray = {};
    for (var i = 0; i < numbers.length; i++) {
        // product p = x*y;
        var x = numbers[i];
        var y = targetProduct / x;
        console.log('x and y values --->', x, y, outputArray);
        if (y in outputArray)
            return [outputArray[y], i];
        outputArray[x] = i;
    }
};
console.log('pairProduct-->', pairProduct([3, 2, 5, 4, 1], 8));
