// This is an input class. Do not edit.
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
  
  export function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
    if(isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo)
    if(isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo)
    return false;
  }
  
  function isDescendant(node: BST, target:BST){
    let currentNode : BST | null = node
    while (currentNode !== null && currentNode !== target) {
      currentNode = target.value < currentNode.value ? currentNode.left : currentNode.right
    }
    return currentNode === target
  }
  
  // using recursion

  // This is an input class. Do not edit.

  export function validateThreeNodes1(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
    if(isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo)
    if(isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo)
    return false;
  }
  
  function isDescendant1(node: BST | null, target: BST): boolean {
    if(node === null) return false
  
    if(node === target) return true
  
    //return target.value < node.value ? isDescendant(node.left, target) : isDescendant(node.right, target)
    if(target.value < node.value){
       return isDescendant1(node.left, target)
    }else{
      return isDescendant1(node.right, target)
    }
  }
  //Input :: 
  // Tree: level orrder BST - 5 2 7 1 4 6 8 0 3
  // nodeOne = 5, nodeTwo = 2, nodeThree = 3 
  //output : true / false
  //Note : one of Node1 or Node 3 is an ancestor of node2 and other node is descendant of nodeTwo
