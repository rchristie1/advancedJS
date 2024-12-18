/*
'''
❓ PROMPT
Given the head node of a singly linked list, remove all the nodes with values that appear more than once. Return the head node of the new linked list, after removing all the duplicate nodes.

Example(s)
head = 1->2->3
removeDuplicateNodes(head) == "1->2 ->3"

head = 6->4->8->3->4
removeDuplicateNodes(head) == "6->8->3"
 

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

function removeDuplicateNodes(head) {
    let map1 = new Map()

    let sNode = new Node(null, head)
    let curr = sNode

    while (curr) {
        const prevVal = map1.get(curr.val) || 0
        map1.set(curr.val, prevVal + 1)
        curr = curr.next
    }

    curr = sNode
    while (curr) {
        const value = map1.get(curr.next?.val)
        if (value > 1) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }

    return sNode.next;
}

// let list1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(7, new Node(8, new Node(9, new Node(10))))))))))
// let list2 = new Node(1, new Node(1, new Node(2, new Node(2))))
// let list3 = new Node(6, new Node(4, new Node(8, new Node(3, new Node(4)))))

// // removeDuplicateNodes(list1)
// // removeDuplicateNodes(list2)
// removeDuplicateNodes(list3)

function toString(head) {
    if (!head)
        return "<empty>"

    let parts = []
    while (head) {
        parts.push(head.val)
        head = head.next
    }

    return parts.join("->")
}

let head = null
console.log(toString(removeDuplicateNodes(head)) == "<empty>")

// 1
head = new Node(1)
console.log(toString(removeDuplicateNodes(head)) == "1")

// 1->1->2
head = new Node(1, new Node(1, new Node(2)))
console.log(toString(removeDuplicateNodes(head)) == "2")

// 1->2->3
head = new Node(1, new Node(2, new Node(3)))
console.log(toString(removeDuplicateNodes(head)) == "1->2->3")

// 6->4->8->3->4
head = new Node(6, new Node(4, new Node(8, new Node(3, new Node(4)))))
console.log(toString(removeDuplicateNodes(head)) == "6->8->3")

// 4->3->4->1->5
head = new Node(4, new Node(3, new Node(4, new Node(1, new Node(5)))))
console.log(toString(removeDuplicateNodes(head)) == "3->1->5")

// 4->3->4->1->4
head = new Node(4, new Node(3, new Node(4, new Node(1, new Node(4)))))
console.log(toString(removeDuplicateNodes(head)) == "3->1")

// 6->8->3->4->4
head = new Node(6, new Node(8, new Node(3, new Node(4, new Node(4)))))
console.log(toString(removeDuplicateNodes(head)) == "6->8->3")

// 6->6->8->3->4
head = new Node(6, new Node(6, new Node(8, new Node(3, new Node(4)))))
console.log(toString(removeDuplicateNodes(head)) == "8->3->4")

// 6->6->8->4->4
head = new Node(6, new Node(6, new Node(8, new Node(4, new Node(4)))))
console.log(toString(removeDuplicateNodes(head)) == "8")

// 6->6->5->5->5
head = new Node(6, new Node(6, new Node(5, new Node(5, new Node(5)))))
console.log(toString(removeDuplicateNodes(head)) == "<empty>")

// 1->1->1->1->1
head = new Node(1, new Node(1, new Node(1, new Node(1, new Node(1)))))
console.log(toString(removeDuplicateNodes(head)) == "<empty>")