"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLoop = exports.LinkedList = void 0;
// This is an input class. Do not edit.
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.value = value;
        this.next = null;
    }
    return LinkedList;
}());
exports.LinkedList = LinkedList;
function findLoop(head) {
    var firstPointer = head.next;
    var secondPointer = head.next.next;
    while (firstPointer != secondPointer) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next.next;
    }
    firstPointer = head;
    while (firstPointer != secondPointer) {
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }
    return firstPointer;
}
exports.findLoop = findLoop;
var nodes = [
    new LinkedList(0),
    new LinkedList(1),
    new LinkedList(2),
    new LinkedList(3),
    new LinkedList(4),
    new LinkedList(5),
    new LinkedList(6),
    new LinkedList(7),
    new LinkedList(8),
    new LinkedList(9),
];
// Linking the nodes as per the structure
for (var i = 0; i < nodes.length; i++) {
    if (i === 9) {
        nodes[i].next = nodes[8]; // Creates the loop here from node 9 back to node 8
    }
    else {
        nodes[i].next = nodes[i + 1];
    }
}
// Test the findLoop function
var loopStart = findLoop(nodes[0]);
console.log("Loop starts at node with value: ".concat(loopStart.value));
