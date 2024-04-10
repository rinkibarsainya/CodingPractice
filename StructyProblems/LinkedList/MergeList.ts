import {DefaultNode, PrintLinkList} from "./DefaultNode";

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
const MergeList = (head1:DefaultNode, head2:DefaultNode) => {
    let dummyNode = new DefaultNode(null);
    let tail = dummyNode;
    while(head1 !== null && head2 !== null){
        //console.log('before -->',head1, head2, tail);
        if(head1.val < head2.val){
            tail.next = head1;
            head1 = head1.next;
        }else{
            tail.next = head2;
            head2 = head2.next
        }
        tail= tail.next;
        //console.log('After ==>', head1, head2, tail)
    }

    if(head1 !== null) tail.next = head1;
    if(head2 !== null) tail.next = head2;
    console.log('tail', tail);
    return dummyNode.next;
}
const head = MergeList(m1, n1);
PrintLinkList(head);
//console.log('Merge List-->', MergeList(m1, n1));