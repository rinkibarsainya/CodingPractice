import { DefaultNode, a} from "./DefaultNode";

const getNodeValue = (head: DefaultNode, index: number) => {
    let count = 0;
    let current = head;
    while(current !== null)
    {
        if(count === index) return current.val;
        count++;
        current= current.next;
    }
    return null;
}

console.log('get node value--->',getNodeValue(a, 2) );