"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryTreeNode_1 = require("./BinaryTreeNode");
var MaxPathSum = function (root) {
    if (root === null)
        return -Infinity;
    console.log('rootVAl', root.val);
    if (root.left === null && root.right === null) {
        console.log('true===>', root.val);
        return Number(root.val);
    }
    var leftTreePath = MaxPathSum(root.left);
    var rightTreePath = MaxPathSum(root.right);
    console.log('leftTreePath, ', leftTreePath);
    console.log('rightTreePath', rightTreePath);
    var maxChildPathSum = Math.max(leftTreePath, rightTreePath);
    console.log('maxChildPathSum', maxChildPathSum);
    return Number(root.val) + maxChildPathSum;
};
console.log(MaxPathSum(BinaryTreeNode_1.a1));
