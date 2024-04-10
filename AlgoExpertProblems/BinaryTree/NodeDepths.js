"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = exports.a = exports.nodeDepths = void 0;
// This is the class of the input binary tree.
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
function nodeDepths(root) {
    // Write your code here.
    var depth = 0;
    return getNodeDepths(root, depth);
}
exports.nodeDepths = nodeDepths;
function getNodeDepths(root, depth) {
    if (root === null)
        return 0;
    return depth + getNodeDepths(root.left, depth + 1) + getNodeDepths(root.right, depth + 1);
}
var BinaryTreeInput = {
    "tree": {
        "nodes": [
            { "id": "1", "left": "2", "right": null, "value": 1 },
            { "id": "2", "left": null, "right": null, "value": 2 },
        ],
        "root": "1"
    }
};
exports.a = new BinaryTree(1);
exports.b = new BinaryTree(2);
exports.a.left = exports.b;
exports.a.right = null;
exports.b.left = null;
exports.b.right = null;
console.log('node Depths =>', nodeDepths(exports.a));
