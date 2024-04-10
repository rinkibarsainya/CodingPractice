import {BinaryTreeNode, a} from "./BinaryTreeNode"
const BreadthFirstSearch = (root: BinaryTreeNode) => {
    if(root === null ) return [];
    const queue =[root];
    let result = [];

    while(queue.length > 0){
        const current = queue.shift();
        result.push(current.val);

        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return result;
}

console.log(BreadthFirstSearch(a));

