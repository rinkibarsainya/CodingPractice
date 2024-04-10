export class BinaryTreeNode{
    val:  number | string;
    left: BinaryTreeNode;
    right: BinaryTreeNode;
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export const a = new BinaryTreeNode('a');
export const b = new BinaryTreeNode('b');
export const c = new BinaryTreeNode('c');
export const d = new BinaryTreeNode('d');
export const e = new BinaryTreeNode('e');
export const f = new BinaryTreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

export const a1 = new BinaryTreeNode(1);
export const b1 = new BinaryTreeNode(6);
export const c1 = new BinaryTreeNode(0);
export const d1 = new BinaryTreeNode(3);
export const e1 = new BinaryTreeNode(-6);
export const f1 = new BinaryTreeNode(2);
export const g1 = new BinaryTreeNode(2);
export const h1 = new BinaryTreeNode(2);

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right =f1;
e1.left = g1;
f1.right = h1;