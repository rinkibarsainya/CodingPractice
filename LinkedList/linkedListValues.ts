class MyNode {
    val:string;
    next: MyNode;
    constructor(val:string) {
        this.val = val;
        this.next = null;
    }
}

const a = new MyNode('a');
const b = new MyNode('b');
const c = new MyNode('c');
const d = new MyNode('d');

a.next = b;
b.next = c;
c.next = d;

const linkedListValues =(head: MyNode) => {
    let current = head;
    let result: string[] = [];
    while(current !== null)
    {
        console.log('current Node next-->', current.val, current.next);
        result.push(current.val);
        current = current.next;
    }
 return result;
}

console.log('linkedListValues --->', linkedListValues(a))