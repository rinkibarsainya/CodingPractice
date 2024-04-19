export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function mergeLinkedLists(headOne: LinkedList, headTwo: LinkedList) {
    let firstPointer : LinkedList | null = headOne
    let secondPointer : LinkedList | null = headTwo
    let firstPointerPrev : LinkedList | null = null
    
    while (firstPointer != null  && secondPointer != null){
      if(firstPointer.value < secondPointer.value){
        firstPointerPrev = firstPointer
        firstPointer = firstPointer.next
      }else{
        if(firstPointerPrev != null) firstPointerPrev.next = secondPointer
        firstPointerPrev = secondPointer
        secondPointer = secondPointer.next
        firstPointerPrev.next = firstPointer
      }
    }
    if(firstPointer === null) firstPointerPrev!.next = secondPointer
    return headOne.value < headTwo.value ? headOne : headTwo;
  }
  
  //headOne = 2->6->7->8
  //headTwo = 1->3->4->5->9->10
  //output = 1->2->3->4->5->6->7->8->9 sorted order (Merge List in place should not brand new list)
  