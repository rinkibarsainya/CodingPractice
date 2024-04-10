import {BinaryTreeNode, a1} from "./BinaryTreeNode";

const MaxPathSum = (root: BinaryTreeNode) => {
 if(root === null) return -Infinity;
 console.log('rootVAl', root.val)
 if(root.left === null && root.right === null) {
  console.log('true===>', root.val);
  return Number(root.val);
 }
 let leftTreePath = MaxPathSum(root.left);
 let rightTreePath = MaxPathSum(root.right);
 console.log('leftTreePath, ', leftTreePath);
 console.log('rightTreePath', rightTreePath);
 let maxChildPathSum = Math.max(leftTreePath, rightTreePath);
 console.log('maxChildPathSum', maxChildPathSum)
 return Number(root.val) + maxChildPathSum;
}

console.log(MaxPathSum(a1))