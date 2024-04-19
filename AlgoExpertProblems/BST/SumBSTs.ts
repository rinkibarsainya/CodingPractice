// This is an input class. Do not edit.
export class BinaryTree {
    value: number;
    left: BinaryTree | null;
    right: BinaryTree | null;
  
    constructor(value: number) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  interface TreeInfo {
    isBST : boolean,
    min: number,
    max: number, 
    bstSize: number,
    bstSum: number, 
    totalSum: number
  }
  
  export function sumBsts(tree: BinaryTree) {
    return getTreeInfo(tree).totalSum;
  }
  
  // using post order traversal 
  function getTreeInfo(tree: BinaryTree | null) : TreeInfo{
    if (tree === null){
      return {
        isBST : true,
        min : Infinity,
        max: -Infinity, 
        bstSize: 0,
        bstSum: 0, 
        totalSum: 0
      }
    }
  
    const leftTreeInfo = getTreeInfo(tree.left)
    const rightTreeInfo = getTreeInfo(tree.right)
    const satisfyBstProperty = tree.value > leftTreeInfo.max && tree.value <= rightTreeInfo.min
    
    const isBst = satisfyBstProperty && leftTreeInfo.isBST && rightTreeInfo.isBST
  
    const maxValue = Math.max(tree.value, Math.max(leftTreeInfo.max, rightTreeInfo.max))
    const minValue = Math.min(tree.value, Math.max(leftTreeInfo.min, rightTreeInfo.min))
  
    let bstSize = 0
    let bstSum = 0
    // total sum of BSTs nodes
    let totalSum = leftTreeInfo.totalSum + rightTreeInfo.totalSum
    
    if(isBst) {
      bstSum = tree.value + leftTreeInfo.bstSum + rightTreeInfo.bstSum
      bstSize = 1 + leftTreeInfo.bstSize + rightTreeInfo.bstSize
    }
  
    if(bstSize >=3) totalSum = bstSum
    return {
      isBST: isBst,
      max: maxValue, 
      min: minValue, 
      bstSize,
      bstSum, 
      totalSum
    }
  }

  // Given Binary Tree , may contain one or more BSTs . write function to return the sum of all the values of nodes in this tree which are part of BST , containing at leat 3 node
  //input tree(level order) 8 2 9 1 ,10 ,5 (9 right 5)
  //output : 13 