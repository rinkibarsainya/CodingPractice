import { DefaultNode, PrintLinkList } from "./DefaultNode";

const CreateLinkedList =(inputArray:string[]) => {
  const dummyHead = new DefaultNode(null);
  let currentNode = dummyHead;
  for(let val of inputArray){
    console.log('value ', val, currentNode);
    currentNode.next = new DefaultNode(val);
    currentNode = currentNode.next;
    console.log('current, current.next ===>',currentNode, currentNode.next )
  }
  return dummyHead.next;
}

const head = CreateLinkedList(['l','m', 'a', 'b','c', 'd', 'x', 'y']);
PrintLinkList(head);
//console.log('Create Linked List-->', CreateLinkedList(['a', 'b','c', 'd']))