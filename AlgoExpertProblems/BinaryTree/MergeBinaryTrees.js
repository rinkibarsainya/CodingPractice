"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.f1 = exports.e1 = exports.d1 = exports.c1 = exports.b1 = exports.a1 = exports.e = exports.d = exports.c = exports.b = exports.a = exports.MergeBinaryTrees = exports.mergeBinaryTrees = exports.BinaryTree = void 0;
// This is an input class. Do not edit.
var BinaryTree = /** @class */ (function () {
    function BinaryTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
// using recursion
function mergeBinaryTrees(tree1, tree2) {
    // console.log('tree1 =>', tree1)
    // console.log('tree2 =>', tree2)
    if (tree1 === null)
        return tree2;
    if (tree2 === null)
        return tree1;
    tree1.value += tree2.value;
    console.log('sum tree1.value  ====>', tree1.value);
    tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
    console.log('============after left subtree call============');
    // console.log(tree1.left)
    tree1.right = mergeBinaryTrees(tree1.right, tree2.right);
    console.log('===========after right subtree call============');
    // console.log(tree1.right)
    console.log('tree =>', tree1);
    return tree1;
}
exports.mergeBinaryTrees = mergeBinaryTrees;
////////////////////// Using Iterative approach using stack///////////////////////////////
function MergeBinaryTrees(tree1, tree2) {
    var _a, _b, _c, _d, _e, _f;
    if (tree1 === null)
        return tree2;
    var tree1Stack = [tree1];
    var tree2Stack = [tree2];
    while (tree1Stack.length > 0) {
        var tree1Node = tree1Stack.pop();
        var tree2Node = tree2Stack.pop();
        if (tree2Node === null)
            continue;
        console.log('tree1', tree1Node.value);
        console.log('tree2', tree2Node.value);
        tree1Node.value += tree2Node.value;
        console.log('tree1 updated', tree1Node.value);
        if (tree1Node.left === null) {
            tree1Node.left = tree2Node.left;
        }
        else {
            tree1Stack.push(tree1Node.left);
            tree2Stack.push(tree2Node.left);
        }
        if (tree1Node.right === null) {
            tree1Node.right = tree2Node.right;
        }
        else {
            tree1Stack.push(tree1Node.right);
            tree2Stack.push(tree2Node.right);
        }
        console.log('tree1Stack', (_a = tree1Stack[0]) === null || _a === void 0 ? void 0 : _a.value, (_b = tree1Stack[0]) === null || _b === void 0 ? void 0 : _b.left, (_c = tree1Stack[0]) === null || _c === void 0 ? void 0 : _c.right);
        console.log('tree2Stack', (_d = tree2Stack[0]) === null || _d === void 0 ? void 0 : _d.value, (_e = tree2Stack[0]) === null || _e === void 0 ? void 0 : _e.left, (_f = tree2Stack[0]) === null || _f === void 0 ? void 0 : _f.right);
    }
    return tree1;
}
exports.MergeBinaryTrees = MergeBinaryTrees;
exports.a = new BinaryTree(1);
exports.b = new BinaryTree(3);
exports.c = new BinaryTree(2);
exports.d = new BinaryTree(7);
exports.e = new BinaryTree(4);
exports.a.left = exports.b;
exports.a.right = exports.c;
exports.b.left = exports.d;
exports.b.right = exports.e;
exports.a1 = new BinaryTree(1);
exports.b1 = new BinaryTree(5);
exports.c1 = new BinaryTree(9);
exports.d1 = new BinaryTree(2);
exports.e1 = new BinaryTree(7);
exports.f1 = new BinaryTree(6);
exports.a1.left = exports.b1;
exports.a1.right = exports.c1;
exports.b1.left = exports.d1;
exports.c1.left = exports.e1;
exports.c1.right = exports.f1;
console.log('mergeBinaryTrees', MergeBinaryTrees(exports.a, exports.a1));
