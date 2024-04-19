// This is the class of the input linked list.
export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function shiftLinkedList(head: LinkedList, k: number) {
    let listLength = 1
    let tailNode : LinkedList = head
    
    //first while loop to find the tail node and length of linked list
    //exit when tailNode.next = null
    while (tailNode.next !== null){
      listLength++
      tailNode = tailNode.next
    }
  
    const shiftBy = Math.abs(k) % listLength
     if(shiftBy === 0) return head
  
    const newTailPostion = k > 0 ? listLength - shiftBy : shiftBy
    
    let newTailNode : LinkedList | null = head
    
    for(let i=1; i< newTailPostion; i++){
      newTailNode = newTailNode!.next
    }
    
    const newHead = newTailNode!.next
    tailNode.next = head
    newTailNode!.next = null
    return newHead
  }
  