/*
'''
❓ PROMPT
We've been given a list of employees at the company, each person's
seniority is denoted by a number, eg: Junior => 3, Senior => 5, and so on.

For each person on the list, we want to find an adjacent employee 
that outranks them in the list to become their mentor. Return an array 
of the same length corresponding to the level of the mentor.

If someone can't find an adjacent superior, they should not be assigned 
a mentor so it should return their own level.

Example(s)
head = 3 -> 1 -> 3
assignMentors(head) == [3,3,3]

head = 5 -> 6 -> 9
assignMentors(head) == [6,9,9]

head = 2 -> 2 -> 2
assignMentors(head) == [2,2,2]

head = 2 -> 7 -> 4 -> 3 -> 5
assignMentors(head) == [7,7,7,5,5]
 

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
check the previous and next and if the previous or next is greater then update the current

store the next value in a temp variable
use this to compare to the next value

 

🛠️ IMPLEMENT
def assignMentors(head: Node) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function assignMentors(head) {
    if(!head) return head

    let curr = head
    // let tmp = []
    let prev;
    
    while (curr) {
        const tmp = curr.value;

        let max = Math.max((prev || -Infinity), (curr?.next?.value || -Infinity))
        
        if(max > curr.value) {
            curr.value = max
        }

        prev = tmp
        curr = curr.next
    }

    return head
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let result = [];
    while (head) {
        result.push(head.value);
        head = head.next;
    }
    console.log(result.join(" → "));
}

// Example usage:
let head1 = createLinkedList([2,7,4,3,5]); // -> 7 7 7 5 5
let head2 = createLinkedList([5,6,9]); // -> 6 9 9
let head3 = createLinkedList([3,1,3]); // -> 3 3 3
let head4 = createLinkedList([8,7,5,4,3]); // -> 8 8 7 5 4

printLinkedList(assignMentors(head1))
printLinkedList(assignMentors(head2))
printLinkedList(assignMentors(head3))
printLinkedList(assignMentors(head4))