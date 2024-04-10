"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var CreateLinkedList = function (inputArray) {
    var dummyHead = new DefaultNode_1.DefaultNode(null);
    var currentNode = dummyHead;
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var val = inputArray_1[_i];
        console.log('value ', val, currentNode);
        currentNode.next = new DefaultNode_1.DefaultNode(val);
        currentNode = currentNode.next;
        console.log('current, current.next ===>', currentNode, currentNode.next);
    }
    return dummyHead.next;
};
var PrintLinkList = function (head) {
    while (head !== null) {
        console.log(head.val + "->");
        head = head.next;
    }
};
//console.log('Default Node ==>', DefaultNode);
var head = CreateLinkedList(['l', 'm', 'a', 'b', 'c', 'd', 'x', 'y']);
PrintLinkList(head);
//console.log('Create Linked List-->', CreateLinkedList(['a', 'b','c', 'd']))
