function LongestPeak(array) {
    var longestPeak = 0;
    var i = 1;
    while (i < array.length - 1) {
        var isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
        if (!isPeak) {
            console.log('is peak not found', i);
            i++;
            continue;
        }
        console.log('peak found', i);
        var leftIdx = i - 2;
        var rightIdx = i + 2;
        console.log('left and right idx', leftIdx, rightIdx);
        console.log('left and right idx val', "Current", array[i], 'left', array[leftIdx], 'right', array[rightIdx]);
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
            leftIdx--;
            console.log('left while', leftIdx);
        }
        while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
            rightIdx++;
            console.log('right while', rightIdx);
        }
        var currentPeakLength = rightIdx - leftIdx - 1;
        console.log('currentPeakLength', currentPeakLength);
        longestPeak = Math.max(currentPeakLength, longestPeak);
        i = rightIdx;
        console.log('new i', i);
    }
    return longestPeak;
}
console.log('LONGEST PEAK =>', LongestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
