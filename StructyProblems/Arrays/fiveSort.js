var fiveSort = function (numbers) {
    var i = 0;
    var j = numbers.length - 1;
    while (i < j) {
        if (numbers[j] === 5) {
            j = j - 1;
        }
        else if (numbers[i] === 5) {
            var temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
            i = i + 1;
        }
        else {
            i = i + 1;
        }
    }
    return numbers;
};
console.log('five sort-->', fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
console.log('five sort 2 -->', fiveSort([12, 5, 1, 5, 12, 7]));
