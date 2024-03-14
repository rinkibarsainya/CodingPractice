"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var insertNode = function (head, value, index) {
    if (index === 0) {
        var newNode = new DefaultNode_1.DefaultNode('x');
        newNode.next = head;
        return newNode;
    }
    var count = 0;
    var current = head;
    while (current !== null) {
        if (count === index - 1) {
            var temp = current.next;
            current.next = new DefaultNode_1.DefaultNode(value);
            current.next.next = temp;
        }
        current = current.next;
        count += 1;
    }
    return head;
};
console.log('insertNode -->', insertNode(DefaultNode_1.a, 'x', 2));
