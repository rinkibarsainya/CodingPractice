export class BST {
    value: number;
    left: BST | null;
    right: BST | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export function findKthLargestValueInBst(tree: BST, k: number) {
    const sortedNodeValues : number[] = []
    InOrderTraverse(tree, sortedNodeValues)
    return sortedNodeValues[sortedNodeValues.length -k];
  }
  
  function InOrderTraverse(tree: BST | null, sortedNodeValues: number[]){
    if(tree === null) return
    InOrderTraverse(tree.left, sortedNodeValues)
    sortedNodeValues.push(tree.value)
    InOrderTraverse(tree.right, sortedNodeValues)
  }
  