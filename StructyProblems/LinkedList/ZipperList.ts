import {DefaultNode} from "./DefaultNode";

const a = new DefaultNode('a');
const b = new DefaultNode('b');
const c = new DefaultNode('c');
a.next = b;
b.next = c;

const x = new DefaultNode('x');
const y = new DefaultNode('y');
const z = new DefaultNode('z');
x.next = y;
y.next = z;


const ZipperList = (head1:DefaultNode, head2:DefaultNode)=> {
   let tail = head1;
   let current1 = head1.next;
   let current2 = head2;
   let count =0;
   current1 = current1.next;
   while(current1 !== null && current2!== null){
       if(count % 2 === 0){ // if count is even then pick node from second linked list current2
           tail.next = current2;
           current2 = current2.next;
       }else{
           tail.next = current1;
           current1 = current1.next;
       }
       tail = tail.next;
       count +=1;
   }
   if(current1 !== null) tail.next = current1;
   if(current2 !== null ) tail.next = current2;

   return head1;
}

console.log('Zipper List --->', ZipperList(a, x));
