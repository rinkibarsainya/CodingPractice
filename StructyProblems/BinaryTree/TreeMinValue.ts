import { BinaryTreeNode, a1} from "./BinaryTreeNode";

//BFS
const TreeMinValue = (root: BinaryTreeNode) => {
    if(root === null) return Infinity;
    let queue = [root];
    let smallest = Infinity;
    while(queue.length > 0){
        const current = queue.shift();
        if(Number(current.val) < smallest) smallest = Number(current.val);

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return smallest;
}
//DFS using Recursion
const TreeMinValueDFS =(root:BinaryTreeNode) => {
    if(root === null) return Infinity
    let smallestLeftValue = TreeMinValueDFS(root.left);
    let smallestRightValue = TreeMinValueDFS(root.right);
    return Math.min(Number(root.val), smallestLeftValue, smallestRightValue);
}

console.log('TreeMinValue', TreeMinValue(a1)
);