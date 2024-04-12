export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function removeKthNodeFromEnd(head: LinkedList, k: number) {
    let counter = 1
    let firstPointer : LinkedList = head
    let secondPointer : LinkedList | null = head
    
    while (counter <= k)
    {
        counter++
        secondPointer = secondPointer.next! 
    }
    // remove head node 
    if(secondPointer == null){
      head.value = head.next!.value
      head.next = head.next!.next
      return
    }
  
    while (secondPointer.next != null ){
      firstPointer= firstPointer.next!
      secondPointer = secondPointer.next
    }
    firstPointer.next = firstPointer.next!.next
    
  }
  