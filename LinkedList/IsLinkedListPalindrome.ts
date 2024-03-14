import {DefaultNode, p1} from "./DefaultNode";

const IsLinkedListPalindrome = (head: DefaultNode) => {
   let result =[];

    while(head !== null){
        result.push(head.val);
        head = head.next;
    }

    return result.join('') === result.reverse().join('');
}

console.log('IS LINKED LIST PALINDROME', IsLinkedListPalindrome(p1))