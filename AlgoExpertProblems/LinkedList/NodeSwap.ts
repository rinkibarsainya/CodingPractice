// This is an input class. Do not edit.
export class LinkedList {
    value: number;
    next: LinkedList | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }


  //using Recursion
  export function nodeSwap(head: LinkedList | null) {
    if( head === null || head.next === null){
      return head
    }
    const nextNode = head.next
    console.log('Before', head, nextNode)
    head.next = nodeSwap(head.next.next)
    console.log('After', head,  head.next)
    nextNode.next = head
    return nextNode;
  }
  
export const a = new LinkedList(0);
export const b = new LinkedList(1);
export const c = new LinkedList(2);
export const d = new LinkedList(3);
export const e = new LinkedList(4);
export const f = new LinkedList(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const head = nodeSwap(a)

export const PrintLinkList = (head:LinkedList ) => {
    while(head !== null){
        console.log(head.value + "->")
        head = head.next;
    }
}

PrintLinkList(head)
//console.log('nodeSwap', PrintLinkList(head))
