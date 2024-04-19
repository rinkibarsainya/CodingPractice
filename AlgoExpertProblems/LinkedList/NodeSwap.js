"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintLinkList = exports.f = exports.e = exports.d = exports.c = exports.b = exports.a = exports.nodeSwap = exports.LinkedList = void 0;
// This is an input class. Do not edit.
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.value = value;
        this.next = null;
    }
    return LinkedList;
}());
exports.LinkedList = LinkedList;
function nodeSwap(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var nextNode = head.next;
    console.log('Before', head, nextNode);
    head.next = nodeSwap(head.next.next);
    console.log('After', head, head.next);
    nextNode.next = head;
    return nextNode;
}
exports.nodeSwap = nodeSwap;
exports.a = new LinkedList(0);
exports.b = new LinkedList(1);
exports.c = new LinkedList(2);
exports.d = new LinkedList(3);
exports.e = new LinkedList(4);
exports.f = new LinkedList(5);
exports.a.next = exports.b;
exports.b.next = exports.c;
exports.c.next = exports.d;
exports.d.next = exports.e;
exports.e.next = exports.f;
var head = nodeSwap(exports.a);
var PrintLinkList = function (head) {
    while (head !== null) {
        console.log(head.value + "->");
        head = head.next;
    }
};
exports.PrintLinkList = PrintLinkList;
(0, exports.PrintLinkList)(head);
//console.log('nodeSwap', PrintLinkList(head))
