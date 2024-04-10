"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTreeNode_1 = require("./BinaryTreeNode");
var TreeIncludes = function (root, target) {
    if (root === null)
        return false;
    var queue = [root];
    while (queue.length > 0) {
        var current = queue.shift();
        if (current.val === target)
            return true;
        if (current.left)
            queue.push(current.left);
        if (current.right)
            queue.push(current.right);
    }
};
console.log('TreeIncludes', TreeIncludes(BinaryTreeNode_1.a, 'e'));
