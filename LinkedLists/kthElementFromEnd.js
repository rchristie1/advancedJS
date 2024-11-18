
/*
Find Kth Element from the end of a Linked List in One Pass

Questions:

1. if linkedlist is empty? -> -1
2. if there are only 1 or 2 elements?  Kth element should not be greater than the number in the list-> return -1


Approches:
1.fast and slow pointer
-> initialize fast and slow pointers with head of the linkedlist
   move the past pointer k steps

    Length=0
    1   2  3  4  5        k=2  O=4
                  F 
           S
*/
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function kthFromLast(head, k) {
    // Write your code here.
    let h = head
    let fast = h
    let slow = h

    for (let i = 0; i < k; i++) {
        if (fast) {
            fast = fast.next
        } else {
            return -1
        }
    }

    
    while (fast) {
        slow = slow.next
        fast = fast.next
    }

    return slow.val
}

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(kthFromLast(LL1, 1)) // 10
console.log(kthFromLast(LL1, 3)) // 3 
console.log(kthFromLast(LL1, 6)) // 13
console.log(kthFromLast(LL1, 7)) // -1