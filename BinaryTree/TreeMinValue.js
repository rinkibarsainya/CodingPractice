"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTreeNode_1 = require("./BinaryTreeNode");
//BFS
var TreeMinValue = function (root) {
    if (root === null)
        return Infinity;
    var queue = [root];
    var smallest = Infinity;
    while (queue.length > 0) {
        var current = queue.shift();
        if (Number(current.val) < smallest)
            smallest = Number(current.val);
        if (current.left)
            queue.push(current.left);
        if (current.right)
            queue.push(current.right);
    }
    return smallest;
};
console.log('TreeMinValue', TreeMinValue(BinaryTreeNode_1.a1));
