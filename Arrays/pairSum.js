function pairSum(numbers, targetSum) {
    var obj = {};
    for (var i = 0; i < numbers.length; i++) {
        // sum = x + y;
        var x = numbers[i];
        var y = targetSum - x;
        if (y in numbers)
            return [i, obj[y]];
        obj[x] = i;
    }
}
console.log('pairSum ====>', pairSum([3, 2, 5, 4, 1], 8));
