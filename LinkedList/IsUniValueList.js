"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var a = new DefaultNode_1.DefaultNode(7);
var b = new DefaultNode_1.DefaultNode(7);
var c = new DefaultNode_1.DefaultNode(5);
var d = new DefaultNode_1.DefaultNode(7);
a.next = b;
b.next = c;
c.next = d;
var IsUniValueList = function (head) {
    var current = head;
    while (current != null) {
        if (current.val !== head.val)
            return false;
        current = current.next;
    }
    return true;
};
console.log('isUniValueList', IsUniValueList(a));
