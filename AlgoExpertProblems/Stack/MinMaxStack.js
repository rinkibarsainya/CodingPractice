"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMaxStack = void 0;
var MinMaxStack = /** @class */ (function () {
    function MinMaxStack() {
    }
    MinMaxStack.prototype.constructer = function () {
        this.minMaxStack = [];
        this.stack = [];
    };
    MinMaxStack.prototype.peek = function () {
        // Write your code here.
        return this.stack[this.stack.length - 1];
    };
    MinMaxStack.prototype.pop = function () {
        // Write your code here.
        this.minMaxStack.pop();
        return this.stack.pop();
    };
    MinMaxStack.prototype.push = function (number) {
        // Write your code here.
        var newMinMaxNumber = { min: number, max: number };
        console.log('this', this, this.minMaxStack);
        if (this.minMaxStack.length) {
            var lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
            newMinMaxNumber.min = Math.min(lastMinMax.min, number);
            newMinMaxNumber.max = Math.max(lastMinMax.max, number);
        }
        this.minMaxStack.push(newMinMaxNumber);
        this.stack.push(number);
    };
    MinMaxStack.prototype.getMin = function () {
        // Write your code here.
        return this.minMaxStack[this.minMaxStack.length - 1].min;
    };
    MinMaxStack.prototype.getMax = function () {
        // Write your code here.
        return this.minMaxStack[this.minMaxStack.length - 1].max;
    };
    return MinMaxStack;
}());
exports.MinMaxStack = MinMaxStack;
var obj = new MinMaxStack();
obj.push(5);
