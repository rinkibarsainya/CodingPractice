"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNode_1 = require("./DefaultNode");
var LongestStreak = function (head) {
    var max_streak = 0;
    var current_streak = 0;
    var prevValue = null;
    var current = head;
    while (current !== null) {
        if (prevValue === current.val) {
            current_streak += 1;
        }
        else {
            current_streak = 1;
        }
        if (current_streak > max_streak) {
            max_streak = current_streak;
        }
        prevValue = current.val;
        current = current.next;
    }
    return max_streak;
};
console.log('LongestStreak', LongestStreak(DefaultNode_1.s1));
