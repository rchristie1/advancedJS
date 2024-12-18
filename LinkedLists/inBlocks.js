/*
'''
❓ PROMPT
Given a linked list and a positive number, *k*, reverse *k* 
items in the list at a time and reverse the remaining fragment if any.

Example(s)
head = 1 -> 2 -> 3
reverseBlocks(head, 2) == "2 -> 1 -> 3"

head = 1 -> 2 -> 3 -> 4 -> 5 -> 6
reverseBlocks(head, 3) == "3 -> 2 -> 1 -> 6 -> 5 -> 4"
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
iterate over the LL until k blocks have been found
add all these blocks to a temp ll while iterating

they should be getting added in reverse order if not reverse the list after the operation
make the head, next of the first element the next of the first element

join it to the second half of the list from k

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}

function reverseBlocks(head, k) {
    if(!head || k === 1) return head

    let prev = head // set to prev because the list will be reversed
    let curr = prev.next
    prev.next = null // the head will become the last element because the list is reversed

    let reversedList = prev
    let count = 1

    while(curr && count < k) {
        // standard approach to reversing a LL
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next

        // increase the counter that keeps track of node count
        count++
    }

    // if there are still nodes in the list then reverse the remaining nodes by
    // recuersively calling the function with the remaining list items until empty
    if(curr) {
        // this ensures any new items are appended to the latest list
        reversedList.next = reverseBlocks(curr, k)
    }

    return prev
}
//helper function to output LinkedList
function toString(head) {
    if (!head)
        return "<empty>"

    let parts = []
    while (head) {
        parts.push(head.val)
        head = head.next
    }

    return parts.join(" -> ")
}

console.log(toString(reverseBlocks(null, 1)) == "<empty>")

let head = new Node(1) // 1
console.log(toString(reverseBlocks(head, 1)) == "1")

head = new Node(1) // 1
console.log(toString(reverseBlocks(head, 9)) == "1")

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(toString(reverseBlocks(head, 1)) == "1 -> 2 -> 3")

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(toString(reverseBlocks(head, 2)) == "2 -> 1 -> 3")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 3)) == "3 -> 2 -> 1 -> 6 -> 5 -> 4")

// 5 -> 6 -> 9
head = new Node(5, new Node(6, new Node(9)))
console.log(toString(reverseBlocks(head, 3)) == "9 -> 6 -> 5")

// 2 -> 2 -> 2
head = new Node(2, new Node(2, new Node(2)))
console.log(toString(reverseBlocks(head, 2)) == "2 -> 2 -> 2")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 2)) == "2 -> 1 -> 4 -> 3 -> 6 -> 5")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 4)) == "4 -> 3 -> 2 -> 1 -> 6 -> 5")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 5)) == "5 -> 4 -> 3 -> 2 -> 1 -> 6")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 5)) == "5 -> 4 -> 3 -> 2 -> 1 -> 6")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 6)) == "6 -> 5 -> 4 -> 3 -> 2 -> 1")

// 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6))))))
console.log(toString(reverseBlocks(head, 9)) == "6 -> 5 -> 4 -> 3 -> 2 -> 1")