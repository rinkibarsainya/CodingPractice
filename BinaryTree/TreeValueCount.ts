import { BinaryTreeNode, a1} from "./BinaryTreeNode";

//BFS
const TreeValueCount = (root: BinaryTreeNode, target: number) => {
    if(root === null) return 0;
  let queue = [root];
  let count = 0;
  while(queue.length > 0){
      const current = queue.shift();
      if(current.val === target) count += 1;
      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
  }
  return count;
}

//DFS
const TreeValueCountDFS = (root: BinaryTreeNode, target: number) => {
    if(root === null) return 0;
    const match = root.val === target ? 1 : 0;
    return match + TreeValueCountDFS(root.left, target) + TreeValueCountDFS(root.right, target);
}

console.log('Tree Value Count -->', TreeValueCount(a1, 6));