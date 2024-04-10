// This is the class of the input binary tree.
class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
// recursive approach using Recursion  
export function nodeDepths(root: BinaryTree) : number {
    // Write your code here.
    let depth : number = 0
    return getNodeDepths(root, depth)
  }
  
  function getNodeDepths(root: BinaryTree | null, depth: number) : number{
    if(root === null) return 0
    return depth + getNodeDepths(root.left, depth + 1 ) + getNodeDepths(root.right, depth + 1)
  }

  // iterative approach using Stack

  export function nodeDepthsUsingStack(root: BinaryTree) {
    // Write your code here.
    let sumDepths = 0
    const stack : {node: BinaryTree | null, depth: number}[] = [{node:root, depth: 0}]
    while (stack.length > 0){
      const {node, depth} = stack.pop()!
      if(node === null ) continue
  
      sumDepths += depth
      stack.push({node: node.left, depth: depth + 1})
      stack.push({node: node.right, depth: depth + 1})
    }
    return sumDepths;
  }
  

  const BinaryTreeInput = {
    "tree": {
        "nodes": [
            {"id": "1", "left": "2", "right": null, "value":1},
            {"id": "2", "left": null, "right": null, "value":2},
        ],
        "root": "1"
    }
  }

  export const a = new BinaryTree(1);
  export const b = new BinaryTree(2);

  a.left = b
  a.right = null
  b.left = null
  b.right = null
  console.log('node Depths =>', nodeDepths(a))
  