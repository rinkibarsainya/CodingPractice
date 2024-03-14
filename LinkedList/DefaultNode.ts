export class DefaultNode {
    val: string | number;
    next: DefaultNode;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


export const a = new DefaultNode('a');
export const b = new DefaultNode('b');
export const c = new DefaultNode('c');
export const d = new DefaultNode('d');

a.next = b;
b.next = c;
c.next = d

export const a1 = new DefaultNode(3);
export const b1 = new DefaultNode(5);
export const c1 = new DefaultNode(2);
export const d1 = new DefaultNode(7);

a1.next = b1;
b1.next = c1;
c1.next = d1;

export const s1 = new DefaultNode(5);
export const s2 = new DefaultNode(5);
export const s3 = new DefaultNode(7);
export const s4 = new DefaultNode(7);
export const s5 = new DefaultNode(7);
export const s6 = new DefaultNode(6);

s1.next = s2;
s2.next = s3;
s3.next = s4;
s4.next = s5;
s5.next = s6;

export const m1 = new DefaultNode(5);
export const m2 = new DefaultNode(7);
export const m3 = new DefaultNode(12);
export const m4 = new DefaultNode(20);

m1.next = m2;
m2.next = m3;
m3.next = m4;

export const n1 = new DefaultNode(6);
export const n2 = new DefaultNode(8);
export const n3 = new DefaultNode(9);
export const n4 = new DefaultNode(25
);

n1.next = n2;
n2.next = n3;
n3.next = n4;

export const p1 = new DefaultNode('N');
export const p2 = new DefaultNode('I');
export const p3 = new DefaultNode('T');
export const p4 = new DefaultNode('I');
export const p5 = new DefaultNode('N');

p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;

export const PrintLinkList = (head:DefaultNode ) => {
    while(head !== null){
        console.log(head.val + "->")
        head = head.next;
    }
}