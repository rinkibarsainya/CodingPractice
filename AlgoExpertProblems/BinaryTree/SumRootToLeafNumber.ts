/*Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.*/


 //Definition for a binary tree node.
  class TreeNode {
     val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
 }
 

function sumNumbers(root: TreeNode | null): number {
  let result: number[] = []  
  sumNumbersHelper(root, '', result)
  return result.reduce((a,b) => a+b)
};

function sumNumbersHelper(root: TreeNode | null, runningSum: string, result: number[]){
    if (root === null) return

    let newRunningSum : string = runningSum.concat((root.val).toString())
    if(!root.left && !root.right){
       result.push(parseInt(newRunningSum))
    }
    sumNumbersHelper(root.left, newRunningSum,  result)
    sumNumbersHelper(root.right, newRunningSum, result)
}