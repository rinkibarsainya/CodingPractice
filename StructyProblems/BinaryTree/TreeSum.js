"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTreeNode_1 = require("./BinaryTreeNode");
//Using Breadth First Search
var TreeSum = function (root) {
    if (root === null)
        return 0;
    var totalSum = 0;
    var queue = [root];
    while (queue.length > 0) {
        var current = queue.shift();
        totalSum += Number(current.val);
        if (current.left)
            queue.push(current.left);
        if (current.right)
            queue.push(current.right);
    }
    return totalSum;
};
//Using Recursion
var TreeSumUsingRecursion = function (root) {
    if (root === null)
        return 0;
    return root.val + TreeSumUsingRecursion(root.left) + TreeSumUsingRecursion(root.right);
};
console.log('treeSum', TreeSum(BinaryTreeNode_1.a1));
