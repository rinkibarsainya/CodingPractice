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
  
  export function invertBinaryTree(tree: BinaryTree | null) {
    // Write your code here.
    const queue : Array<BinaryTree | null> = [tree]
    while(queue.length){
      const current = queue.shift()!
      if(current === null) continue
      swapLeftAndRight(current)
      queue.push(current.left)
      queue.push(current.right)
      
    }
  }

  //Recursive 
  export function invertBinaryTreeUsingRecursion(tree: BinaryTree | null) {

    if(tree == null) return
    swapLeftAndRight(tree)
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)
  }
  
  function swapLeftAndRight(tree: BinaryTree){
    const temp = tree.left
    tree.left = tree.right
    tree.right = temp
  }