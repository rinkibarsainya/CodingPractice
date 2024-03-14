"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTreeNode_1 = require("./BinaryTreeNode");
var BreadthFirstSearch = function (root) {
    if (root === null)
        return [];
    var queue = [root];
    var result = [];
    while (queue.length > 0) {
        var current = queue.shift();
        result.push(current.val);
        if (current.left)
            queue.push(current.left);
        if (current.right)
            queue.push(current.right);
    }
    return result;
};
console.log(BreadthFirstSearch(BinaryTreeNode_1.a));
