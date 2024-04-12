export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function mergingLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
    // Write your code here.
    let currentNodeOne : LinkedList | null  = linkedListOne
    let currentNodeTwo : LinkedList | null = linkedListTwo
  
    while(currentNodeOne != currentNodeTwo){
      if(currentNodeOne === null){
        currentNodeOne = linkedListTwo
      }else{
        currentNodeOne = currentNodeOne.next
      }
  
      if(currentNodeTwo === null){
        currentNodeTwo = linkedListOne
      }else{
        currentNodeTwo = currentNodeTwo.next
      }
    }
    return currentNodeOne;
  }
  