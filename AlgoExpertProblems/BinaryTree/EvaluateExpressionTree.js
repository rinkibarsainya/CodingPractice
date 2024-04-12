"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i = exports.h = exports.g = exports.f = exports.e = exports.d = exports.c = exports.b = exports.a = exports.evaluateExpressionTree = exports.BinaryTree = void 0;
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
function evaluateExpressionTree(tree) {
    if (tree.value >= 0)
        return tree.value;
    console.log('tree value', tree.value);
    var leftSubTreeValue = evaluateExpressionTree(tree.left);
    var rightSubTreeValue = evaluateExpressionTree(tree.right);
    console.log('leftSubTreeValue, rightSubTreeValue', leftSubTreeValue, rightSubTreeValue);
    if (tree.value === -1)
        return leftSubTreeValue + rightSubTreeValue;
    if (tree.value === -2)
        return leftSubTreeValue - rightSubTreeValue;
    if (tree.value === -3)
        return Math.trunc(leftSubTreeValue / rightSubTreeValue);
    return leftSubTreeValue * rightSubTreeValue;
}
exports.evaluateExpressionTree = evaluateExpressionTree;
exports.a = new BinaryTree(-1);
exports.b = new BinaryTree(-2);
exports.c = new BinaryTree(-3);
exports.d = new BinaryTree(-4);
exports.e = new BinaryTree(2);
exports.f = new BinaryTree(2);
exports.g = new BinaryTree(3);
exports.h = new BinaryTree(8);
exports.i = new BinaryTree(3);
exports.a.left = exports.b;
exports.a.right = exports.c;
exports.b.left = exports.d;
exports.b.right = exports.e;
exports.d.left = exports.f;
exports.d.right = exports.g;
exports.c.left = exports.h;
exports.c.right = exports.i;
console.log('evaluateExpressionTree', evaluateExpressionTree(exports.a));
