var MyNode = /** @class */ (function () {
    function MyNode(val) {
        this.val = val;
        this.next = null;
    }
    return MyNode;
}());
var a = new MyNode('a');
var b = new MyNode('b');
var c = new MyNode('c');
var d = new MyNode('d');
a.next = b;
b.next = c;
c.next = d;
var linkedListValues = function (head) {
    var current = head;
    var result = [];
    while (current !== null) {
        console.log('current Node next-->', current.val, current.next);
        result.push(current.val);
        current = current.next;
    }
    return result;
};
console.log('linkedListValues --->', linkedListValues(a));
