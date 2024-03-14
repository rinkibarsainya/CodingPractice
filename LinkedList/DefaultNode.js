"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintLinkList = exports.p5 = exports.p4 = exports.p3 = exports.p2 = exports.p1 = exports.n4 = exports.n3 = exports.n2 = exports.n1 = exports.m4 = exports.m3 = exports.m2 = exports.m1 = exports.s6 = exports.s5 = exports.s4 = exports.s3 = exports.s2 = exports.s1 = exports.d1 = exports.c1 = exports.b1 = exports.a1 = exports.d = exports.c = exports.b = exports.a = exports.DefaultNode = void 0;
var DefaultNode = /** @class */ (function () {
    function DefaultNode(val) {
        this.val = val;
        this.next = null;
    }
    return DefaultNode;
}());
exports.DefaultNode = DefaultNode;
exports.a = new DefaultNode('a');
exports.b = new DefaultNode('b');
exports.c = new DefaultNode('c');
exports.d = new DefaultNode('d');
exports.a.next = exports.b;
exports.b.next = exports.c;
exports.c.next = exports.d;
exports.a1 = new DefaultNode(3);
exports.b1 = new DefaultNode(5);
exports.c1 = new DefaultNode(2);
exports.d1 = new DefaultNode(7);
exports.a1.next = exports.b1;
exports.b1.next = exports.c1;
exports.c1.next = exports.d1;
exports.s1 = new DefaultNode(5);
exports.s2 = new DefaultNode(5);
exports.s3 = new DefaultNode(7);
exports.s4 = new DefaultNode(7);
exports.s5 = new DefaultNode(7);
exports.s6 = new DefaultNode(6);
exports.s1.next = exports.s2;
exports.s2.next = exports.s3;
exports.s3.next = exports.s4;
exports.s4.next = exports.s5;
exports.s5.next = exports.s6;
exports.m1 = new DefaultNode(5);
exports.m2 = new DefaultNode(7);
exports.m3 = new DefaultNode(12);
exports.m4 = new DefaultNode(20);
exports.m1.next = exports.m2;
exports.m2.next = exports.m3;
exports.m3.next = exports.m4;
exports.n1 = new DefaultNode(6);
exports.n2 = new DefaultNode(8);
exports.n3 = new DefaultNode(9);
exports.n4 = new DefaultNode(25);
exports.n1.next = exports.n2;
exports.n2.next = exports.n3;
exports.n3.next = exports.n4;
exports.p1 = new DefaultNode('N');
exports.p2 = new DefaultNode('I');
exports.p3 = new DefaultNode('T');
exports.p4 = new DefaultNode('I');
exports.p5 = new DefaultNode('N');
exports.p1.next = exports.p2;
exports.p2.next = exports.p3;
exports.p3.next = exports.p4;
exports.p4.next = exports.p5;
var PrintLinkList = function (head) {
    while (head !== null) {
        console.log(head.val + "->");
        head = head.next;
    }
};
exports.PrintLinkList = PrintLinkList;
