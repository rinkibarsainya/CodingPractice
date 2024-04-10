"use strict";
//{"dishes" : [-3,-5,1,7], "target": 8}
Object.defineProperty(exports, "__esModule", { value: true });
exports.sweetAndSavory = void 0;
function sweetAndSavory(dishes, target) {
    // Write your code here.
    var sweetDishes = dishes.filter(function (dish) { return dish < 0; }).sort(function (a, b) { return b - a; }); // [-5,-3]
    var savoryDishes = dishes.filter(function (dish) { return dish > 0; }).sort(function (a, b) { return a - b; }); // [1, 7]
    var sweetIdx = 0;
    var savoryIdx = 0;
    var bestPair = [0, 0];
    var bestDiff = Infinity;
    while (sweetIdx < sweetDishes.length && savoryIdx < savoryDishes.length) {
        var currentSum = sweetDishes[sweetIdx] + savoryDishes[savoryIdx];
        if (currentSum <= target) {
            var currentDiff = target - currentSum;
            if (currentDiff < bestDiff) {
                bestDiff = currentDiff;
                bestPair = [sweetDishes[sweetIdx], savoryDishes[savoryIdx]];
            }
            savoryIdx++;
            console.log('bestpair savoryIdx', bestPair, savoryIdx);
        }
        else {
            sweetIdx++;
            console.log('sweetIndex', sweetIdx);
        }
    }
    return bestPair;
}
exports.sweetAndSavory = sweetAndSavory;
console.log('Sweet and Savory =>', sweetAndSavory([-3, -5, 1, 7], 8));
