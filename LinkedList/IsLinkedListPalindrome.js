"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var IsLinkedListPalindrome = function (head) {
    var result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result.join('') === result.reverse().join('');
};
console.log('IS LINKED LIST PALINDROME', IsLinkedListPalindrome(DefaultNode_1.p1));
