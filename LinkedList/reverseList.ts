import {DefaultNode, a} from "./DefaultNode";

const reverseList = (head: DefaultNode) => {
    let current = head;
    let prev: DefaultNode = null;
    while(current !== null){
        const next = current.next;
        current.next = prev;
        prev= current;
        current = next;
    }
    return prev;
}

console.log('reverse Linked List', reverseList(a));