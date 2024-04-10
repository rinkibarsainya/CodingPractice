import { DefaultNode, a} from "./DefaultNode";

const insertNode = (head: DefaultNode, value:string, index:number ) => {
    if(index === 0){
        const newNode = new DefaultNode('x');
        newNode.next = head;
        return newNode;
    }

    let count = 0;
    let current = head;
    while(current !==  null){
      if(count === index-1){
          const temp = current.next;
          current.next = new DefaultNode(value);
          current.next.next =temp;
      }
      current = current.next;
      count += 1;
    }
    return head;
}

console.log('insertNode -->', insertNode(a, 'x', 2));
