"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var reverseList = function (head) {
    var current = head;
    var prev = null;
    while (current !== null) {
        var next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};
console.log('reverse Linked List', reverseList(DefaultNode_1.a));
