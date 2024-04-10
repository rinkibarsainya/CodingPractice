import { DefaultNode, a} from "./DefaultNode";

const removeNode = (head: DefaultNode, targetValue: string) =>{
    if(head.val === targetValue) return head.next;
    let prev = null;
    let current = head;
    while(current !== null){
        if(current.val === targetValue){
            prev.next = current.next;
        }
        prev = current;
        current = current.next;

    }
    return head;
}

console.log('remove node from Linked list', removeNode(a, 'c'));

const RemoveNodeUsingRecursion = (head:DefaultNode, targetValue: string) => {
    if(head === null) return null;
    if(head.val === targetValue) return head.next;
    head.next = RemoveNodeUsingRecursion(head.next, targetValue);
    return head;
}