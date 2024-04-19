"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var a = new DefaultNode_1.DefaultNode('a');
var b = new DefaultNode_1.DefaultNode('b');
var c = new DefaultNode_1.DefaultNode('c');
a.next = b;
b.next = c;
var x = new DefaultNode_1.DefaultNode('x');
var y = new DefaultNode_1.DefaultNode('y');
var z = new DefaultNode_1.DefaultNode('z');
x.next = y;
y.next = z;
var ZipperList = function (head1, head2) {
    var tail = head1;
    var current1 = head1.next;
    var current2 = head2;
    var count = 0;
    current1 = current1.next;
    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) { // if count is even then pick node from second linked list current2
            tail.next = current2;
            current2 = current2.next;
        }
        else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count += 1;
    }
    if (current1 !== null)
        tail.next = current1;
    if (current2 !== null)
        tail.next = current2;
    return head1;
};
var head = ZipperList(a, x);
(0, DefaultNode_1.PrintLinkList)(head);
//console.log('Zipper List --->', ZipperList(a, x));
