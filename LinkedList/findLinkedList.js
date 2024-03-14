"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var linkedListFind = function (head, target) {
    while (head !== null) {
        if (head.val === target)
            return true;
        head = head.next;
    }
    return false;
};
console.log('find linked list --->', linkedListFind(DefaultNode_1.a, 'q'));
