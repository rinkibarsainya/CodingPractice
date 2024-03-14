"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.h1 = exports.g1 = exports.f1 = exports.e1 = exports.d1 = exports.c1 = exports.b1 = exports.a1 = exports.f = exports.e = exports.d = exports.c = exports.b = exports.a = exports.BinaryTreeNode = void 0;
var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return BinaryTreeNode;
}());
exports.BinaryTreeNode = BinaryTreeNode;
exports.a = new BinaryTreeNode('a');
exports.b = new BinaryTreeNode('b');
exports.c = new BinaryTreeNode('c');
exports.d = new BinaryTreeNode('d');
exports.e = new BinaryTreeNode('e');
exports.f = new BinaryTreeNode('f');
exports.a.left = exports.b;
exports.a.right = exports.c;
exports.b.left = exports.d;
exports.b.right = exports.e;
exports.c.right = exports.f;
exports.a1 = new BinaryTreeNode(1);
exports.b1 = new BinaryTreeNode(6);
exports.c1 = new BinaryTreeNode(0);
exports.d1 = new BinaryTreeNode(3);
exports.e1 = new BinaryTreeNode(-6);
exports.f1 = new BinaryTreeNode(2);
exports.g1 = new BinaryTreeNode(2);
exports.h1 = new BinaryTreeNode(2);
exports.a1.left = exports.b1;
exports.a1.right = exports.c1;
exports.b1.left = exports.d1;
exports.b1.right = exports.e1;
exports.c1.right = exports.f1;
exports.e1.left = exports.g1;
exports.f1.right = exports.h1;
