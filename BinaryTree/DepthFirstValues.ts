import {BinaryTreeNode, a} from "./BinaryTreeNode";

const DepthFirstValues = (root: BinaryTreeNode) => {
    if(root === null) return [];
    const stack = [root];
    let result:string[] = [];
    while(stack.length > 0)
    {
        const current = stack.pop();
        if (typeof current.val === "string") {
            result.push(current.val);
        }
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return result;
}

const DepthFirstValuesUsingRecursion = (root: BinaryTreeNode) => {
    if (root === null) return [];
    let leftValues = DepthFirstValuesUsingRecursion(root.left); //b, d, e
    let rightValues = DepthFirstValuesUsingRecursion(root.right); //c, f
    return [root.val, ...leftValues, ...rightValues];
}

console.log(DepthFirstValues(a));