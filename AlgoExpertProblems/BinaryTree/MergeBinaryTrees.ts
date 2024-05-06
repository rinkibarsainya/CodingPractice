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
  // using recursion
  export function mergeBinaryTrees(tree1: BinaryTree | null, tree2: BinaryTree | null) {
    // console.log('tree1 =>', tree1)
    // console.log('tree2 =>', tree2)
    if(tree1 === null ) return tree2
  
    if (tree2 === null) return tree1
    
    tree1.value += tree2.value
    console.log('sum tree1.value  ====>' , tree1.value)
    tree1.left = mergeBinaryTrees(tree1.left, tree2.left )
    console.log('============after left subtree call============')
   // console.log(tree1.left)
    tree1.right = mergeBinaryTrees(tree1.right, tree2.right)
    console.log('===========after right subtree call============')
   // console.log(tree1.right)
   console.log('tree =>' , tree1)
    return tree1
  }

  ////////////////////// Using Iterative approach using stack///////////////////////////////

  export function MergeBinaryTrees(tree1: BinaryTree | null, tree2: BinaryTree | null) {
    if(tree1 === null) return tree2
     
     const tree1Stack = [tree1]
     const tree2Stack = [tree2]
   
     while(tree1Stack.length > 0){
       const tree1Node = tree1Stack.pop()!
       const tree2Node = tree2Stack.pop()
   
       if(tree2Node === null) continue
       
       console.log('tree1', tree1Node.value)
       console.log('tree2', tree2Node.value)

       tree1Node.value += tree2Node!.value

       console.log('tree1 updated', tree1Node.value)
       
   
       if(tree1Node.left === null){
         tree1Node.left = tree2Node!.left
       }else{
         tree1Stack.push(tree1Node.left)
         tree2Stack.push(tree2Node!.left)
       }
   
      if(tree1Node.right === null){
         tree1Node.right = tree2Node!.right
       }else{
         tree1Stack.push(tree1Node.right)
         tree2Stack.push(tree2Node!.right)
       }
       console.log('tree1Stack', tree1Stack[0]?.value, tree1Stack[0]?.left, tree1Stack[0]?.right,)
       console.log('tree2Stack', tree2Stack[0]?.value, tree2Stack[0]?.left, tree2Stack[0]?.right)
     }
     return tree1;
   }
  
  export const a = new BinaryTree(1);
  export const b = new BinaryTree(3);
  export const c = new BinaryTree(2);
  export const d = new BinaryTree(7);
  export const e = new BinaryTree(4);
  
  a.left = b
  a.right = c
  b.left = d
  b.right = e

  export const a1 = new BinaryTree(1);
  export const b1 = new BinaryTree(5);
  export const c1 = new BinaryTree(9);
  export const d1 = new BinaryTree(2);
  export const e1 = new BinaryTree(7);
  export const f1 = new BinaryTree(6);
  
  

  a1.left = b1
  a1.right = c1
  b1.left = d1
  c1.left = e1
  c1.right = f1

  console.log('mergeBinaryTrees', MergeBinaryTrees(a, a1))
 
