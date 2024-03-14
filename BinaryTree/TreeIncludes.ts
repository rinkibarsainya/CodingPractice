import { BinaryTreeNode, a} from "./BinaryTreeNode";

// Breadth First Search
const TreeIncludes =(root: BinaryTreeNode, target: string| number) => {
    if(root === null) return false;
    let queue = [root];
    while(queue.length > 0){
        let current = queue.shift();
        if(current.val === target) return true;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
}

// Depth First Search
const TreeIncludesDFS = (root: BinaryTreeNode, target: number) => {
    if(root === null) return false;
    if(root.val === target) return true;
    return TreeIncludesDFS(root.left, target) || TreeIncludesDFS(root.right, target);
}
console.log('TreeIncludes', TreeIncludes(a, 'e'));