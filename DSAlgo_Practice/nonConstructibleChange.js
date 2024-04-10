function nonConstructibleChange(coins) {
    coins.sort(function (a, b) { return a - b; });
    var currentChange = 0;
    for (var _i = 0, coins_1 = coins; _i < coins_1.length; _i++) {
        var coin = coins_1[_i];
        if (coin > currentChange + 1)
            return currentChange + 1;
        currentChange += coin;
    }
    return currentChange + 1;
}
console.log('nonConstructibleChange', nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
