export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  export function sumOfLinkedLists(linkedListOne: LinkedList, linkedListTwo: LinkedList) {
    // Write your code here.
    let dummyNode  = new LinkedList(0)
    let currentNode = dummyNode
    
    let listOneNode : LinkedList | null = linkedListOne
    let listTwoNode : LinkedList | null = linkedListTwo
    
    let carry: number = 0
  
    while(listOneNode != null || listTwoNode != null || carry != 0 ){
      
      let sum = (listOneNode?.value || 0) + (listTwoNode?.value || 0) + carry
      let value = sum % 10
      const newNode = new LinkedList(value)
      
      currentNode.next = newNode
      currentNode = newNode
  
      carry = Math.floor(sum /10)
      
      listOneNode = listOneNode?.next || null
      listTwoNode = listTwoNode?.next  || null
      
      
    }
    return dummyNode.next;
  }
  