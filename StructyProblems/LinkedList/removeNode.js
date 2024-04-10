"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var removeNode = function (head, targetValue) {
    if (head.val === targetValue)
        return head.next;
    var prev = null;
    var current = head;
    while (current !== null) {
        if (current.val === targetValue) {
            prev.next = current.next;
        }
        prev = current;
        current = current.next;
    }
    return head;
};
console.log('remove node from Linked list', removeNode(DefaultNode_1.a, 'c'));
