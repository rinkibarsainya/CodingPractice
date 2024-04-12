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
  
  export function branchSums(root: BinaryTree) {
    // Write your code here.
    const sums : number[] = []
    getBranchesSum(root, 0, sums)
    return sums;
  }
  
  function getBranchesSum(root: BinaryTree | null, runningSum: number, sums: number[]) {
    if(root === null) return;
    
    const newRunningSum = runningSum + root.value
    if(!root.left && !root.right){
      sums.push(newRunningSum)
      return;
    }
    getBranchesSum(root.left, newRunningSum, sums)
    getBranchesSum(root.right, newRunningSum, sums)
  }
  
  
  
  
  