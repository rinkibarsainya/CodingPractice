export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function middleNode(linkedList: LinkedList) {
    // Write your code here.
    let slowPointer : LinkedList = linkedList!
    let fastPointer : LinkedList | null = linkedList
  
    while(fastPointer != null && fastPointer.next != null){
      slowPointer = slowPointer.next!
      fastPointer = fastPointer.next.next
    }
    
    return slowPointer;
  }
  
  export function middleNode1(linkedList: LinkedList) {
    // Write your code here.
    let count : number = 0
    let currentNode : LinkedList = linkedList
    while( currentNode != null){
      count++
      currentNode = currentNode.next!
    }
    const middlePoint = Math.floor(count/2)
    let middleNode = linkedList
    for(let i =0; i < middlePoint; i++){
      middleNode = middleNode.next!
    }
    return middleNode;
  }
  