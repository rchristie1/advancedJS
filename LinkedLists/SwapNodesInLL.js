/*
'''
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
 

EXAMPLE(S)
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]



BRAINSTORMING

- traverse the list to find the length, backtrack from the end node, then move the left pointer forward, then swap
- create a new linked list which is the inverse of the one given, then find the kth node of each, and swap
- traverse by next.next, etc. to find the length, ...
- keep a fast & slow pointer, the slow follows k behind the fast, keep track of the kth from start, then swap
- create a dictionary of nodes with keys being their position, you'll know the length by the end, then swap based upon indexes
- create array of nodes in their proper positions, you'll know the length by the end, then swap based upon indexes
- 

 

FUNCTION SIGNATURE
def swapNodes(self, head: ListNode, k: int) -> ListNode:
'''
*/
/*
k size?
- k can be 0 to very large
- singly linked list
- 
-
*/

class ListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

function swapNodes (head, k) {
    let curr = head;
    let count = 0;
    let arr;

    while(curr) {
        // count++
        // if(curr.value === k) {
        //     tmpVal = 2
        // }

        console.log(curr.value);
        

        curr = curr.next
    }


}

const LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

swapNodes(LL1, 2)