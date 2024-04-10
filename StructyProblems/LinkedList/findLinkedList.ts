import {DefaultNode, a,} from "./DefaultNode";

const  linkedListFind =(head:DefaultNode, target) =>{
    while(head !== null){
      if(head.val === target) return true;
      head = head.next;
    }
    return false;
}

console.log('find linked list --->', linkedListFind(a,'q' ))