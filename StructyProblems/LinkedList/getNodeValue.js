"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var getNodeValue = function (head, index) {
    var count = 0;
    var current = head;
    while (current !== null) {
        if (count === index)
            return current.val;
        count++;
        current = current.next;
    }
    return null;
};
console.log('get node value--->', getNodeValue(DefaultNode_1.a, 2));
