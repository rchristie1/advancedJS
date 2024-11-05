/*
'''
❓ PROMPT
Given a linked list, return the second to last element's value.

Example(s)
1 -> 2 => 1
1 -> 2 -> 3 -> 4 => 3
 

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
 

🛠️ IMPLEMENT
function secondToLast(head) {
def secondToLast(head: Node) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/
class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

function secondToLast(head) {
    if(!head) return head

    let sNode = new Node(null)
    sNode.next = head
    let curr = sNode
    let el;
    while (curr && curr.next) {
        if(!curr.next.next) {
            el = curr.value
            break;
        }

        curr = curr.next
    }
    return el
}

console.log(secondToLast(null) === null)

// 1
let head = new Node(1)
console.log(secondToLast(head) === null)

// 1 -> 2
head = new Node(1, new Node(2))
console.log(secondToLast(head) === 1)

// 1 -> 2 -> 3
head = new Node(1, new Node(2, new Node(3)))
console.log(secondToLast(head) === 2)

// 1 -> 2 -> 3 -> 4
head = new Node(1, new Node(2, new Node(3, new Node (4))))
console.log(secondToLast(head) === 3)

// 1 -> 2 -> 3 -> 4 -> 5
head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))
console.log(secondToLast(head) === 4)

// TC: O(N)
// SC: O(1)