function subarraySort(array) {
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < array.length; i++) {
        var num = array[i];
        if (isOutOfOrder(i, num, array)) {
            min = Math.min(num, min);
            max = Math.max(num, max);
        }
    }
    var leftIdx = 0;
    var rightIdx = array.length - 1;
    while (min >= array[leftIdx])
        leftIdx++;
    while (max <= array[rightIdx])
        rightIdx--;
    return [leftIdx, rightIdx];
}
function isOutOfOrder(i, num, array) {
    if (i === 0)
        return num > array[i + 1];
    if (i === array.length - 1)
        return num < array[i - 1];
    return num > array[i + 1] || num < array[i - 1];
}
console.log('subarraySort', subarraySort([1, 2, 8, 4, 5]));
console.log('subarraySort', subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]));
