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
  
  export function evaluateExpressionTree(tree: BinaryTree) {
    if(tree.value >= 0 ) return tree.value


    console.log('tree value', tree.value)
    const leftSubTreeValue = evaluateExpressionTree(tree.left)
    const rightSubTreeValue = evaluateExpressionTree(tree.right)
    console.log('leftSubTreeValue, rightSubTreeValue', leftSubTreeValue, rightSubTreeValue)
    if(tree.value === -1) return leftSubTreeValue + rightSubTreeValue
    if(tree.value === -2) return leftSubTreeValue - rightSubTreeValue
    if(tree.value === -3) return Math.trunc(leftSubTreeValue/rightSubTreeValue)
    return leftSubTreeValue * rightSubTreeValue;
  }
  
  export const a = new BinaryTree(-1);
  export const b = new BinaryTree(-2);
  export const c = new BinaryTree(-3);
  export const d = new BinaryTree(-4);
  export const e = new BinaryTree(2);
  export const f = new BinaryTree(2);
  export const g = new BinaryTree(3);
  export const h = new BinaryTree(8);
  export const i = new BinaryTree(3);
  

  a.left = b
  a.right = c
  b.left = d
  b.right = e
  d.left = f
  d.right = g
  c.left = h
  c.right = i

  console.log('evaluateExpressionTree', evaluateExpressionTree(a))