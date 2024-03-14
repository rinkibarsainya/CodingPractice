class NewNode{
    val: number;
    next: NewNode;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a1 = new NewNode(3);
const b1 = new NewNode(5);
const c1 = new NewNode(2);
const d1 = new NewNode(7);

a1.next = b1;
b1.next = c1;
c1.next = d1;

const linkedListSum =(head: NewNode) =>{
    let sum = 0;
    let currentNode = head;
    while(currentNode !== null)
    {
        sum = sum + currentNode.val;
        currentNode =currentNode.next;
    }
    return sum;
}

console.log('LInkedList Sum --->', linkedListSum(a1));