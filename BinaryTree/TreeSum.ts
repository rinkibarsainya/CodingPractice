import {BinaryTreeNode, a1} from "./BinaryTreeNode";

//Using Breadth First Search
const TreeSum = (root: BinaryTreeNode) => {
    if(root === null) return 0;
    let totalSum :  number = 0;
    let queue = [root];
    while(queue.length > 0)
    {
        let current = queue.shift();
        totalSum += Number(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return totalSum;
}

//Using Recursion
const TreeSumUsingRecursion = (root: BinaryTreeNode) => {
    if(root === null) return 0;
    return root.val + TreeSumUsingRecursion(root.left) + TreeSumUsingRecursion(root.right);
}
console.log('treeSum', TreeSum(a1));