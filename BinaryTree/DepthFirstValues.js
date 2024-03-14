"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTreeNode_1 = require("./BinaryTreeNode");
var DepthFirstValues = function (root) {
    if (root === null)
        return [];
    var stack = [root];
    var result = [];
    while (stack.length > 0) {
        var current = stack.pop();
        result.push(current.val);
        if (current.right)
            stack.push(current.right);
        if (current.left)
            stack.push(current.left);
    }
    return result;
};
var DepthFirstValuesUsingRecursion = function (root) {
    if (root === null)
        return [];
    var leftValues = DepthFirstValuesUsingRecursion(root.left);
    var rightValues = DepthFirstValuesUsingRecursion(root.right);
    return __spreadArray(__spreadArray([root.val], leftValues, true), rightValues, true);
};
console.log(DepthFirstValues(BinaryTreeNode_1.a));
