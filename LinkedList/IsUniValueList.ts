import {DefaultNode} from "./DefaultNode";

const a = new DefaultNode(7);
const b= new DefaultNode(7);
const c = new DefaultNode(5);
const d= new DefaultNode(7);

a.next = b;
b.next = c;
c.next = d;
const IsUniValueList = (head) => {
    let current = head;

    while(current != null){
        if(current.val !== head.val) return false;
        current = current.next;
    }
    return true;
}

console.log('isUniValueList', IsUniValueList(a))