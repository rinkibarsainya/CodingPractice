"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.n4 = exports.n3 = exports.n2 = exports.n1 = exports.m4 = exports.m3 = exports.m2 = exports.m1 = void 0;
var DefaultNode_1 = require("./DefaultNode");
exports.m1 = new DefaultNode_1.DefaultNode(5);
exports.m2 = new DefaultNode_1.DefaultNode(7);
exports.m3 = new DefaultNode_1.DefaultNode(12);
exports.m4 = new DefaultNode_1.DefaultNode(20);
exports.m1.next = exports.m2;
exports.m2.next = exports.m3;
exports.m3.next = exports.m4;
exports.n1 = new DefaultNode_1.DefaultNode(6);
exports.n2 = new DefaultNode_1.DefaultNode(8);
exports.n3 = new DefaultNode_1.DefaultNode(9);
exports.n4 = new DefaultNode_1.DefaultNode(25);
exports.n1.next = exports.n2;
exports.n2.next = exports.n3;
exports.n3.next = exports.n4;
var MergeList = function (head1, head2) {
    var dummyNode = new DefaultNode_1.DefaultNode(null);
    var tail = dummyNode;
    while (head1 !== null && head2 !== null) {
        //console.log('before -->',head1, head2, tail);
        if (head1.val < head2.val) {
            tail.next = head1;
            head1 = head1.next;
        }
        else {
            tail.next = head2;
            head2 = head2.next;
        }
        tail = tail.next;
        //console.log('After ==>', head1, head2, tail)
    }
    if (head1 !== null)
        tail.next = head1;
    if (head2 !== null)
        tail.next = head2;
    console.log('tail', tail);
    return dummyNode.next;
};
var head = MergeList(exports.m1, exports.n1);
(0, DefaultNode_1.PrintLinkList)(head);
//console.log('Merge List-->', MergeList(m1, n1));
