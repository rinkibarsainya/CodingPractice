export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
    // Write your code here.
    let currentNode : LinkedList | null = linkedList
    while(currentNode != null){
      let nextNode: LinkedList =  currentNode.next!
      while(nextNode != null && nextNode.value === currentNode.value){
        nextNode = nextNode.next!
      }
      currentNode.next = nextNode
      currentNode = nextNode
      
    }
    return linkedList;
  }
  