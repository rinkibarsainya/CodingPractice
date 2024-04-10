var NewNode = /** @class */ (function () {
    function NewNode(val) {
        this.val = val;
        this.next = null;
    }
    return NewNode;
}());
var a1 = new NewNode(3);
var b1 = new NewNode(5);
var c1 = new NewNode(2);
var d1 = new NewNode(7);
a1.next = b1;
b1.next = c1;
c1.next = d1;
var linkedListSum = function (head) {
    var sum = 0;
    var currentNode = head;
    while (currentNode !== null) {
        sum = sum + currentNode.val;
        currentNode = currentNode.next;
    }
    return sum;
};
console.log('LInkedList Sum --->', linkedListSum(a1));
