class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function removeFNodesAfterKNodes(head, f, k) {
    if(!head || f === 0) return head

    let dummy = new ListNode(null)
    dummy.next = head

    let current = dummy

    while (current) {
        // skip k nodes
        for(let i = 0; i < k && current; i++) {
            current = current.next
        }

        // remove f nodes
        let tmp = current
        for(let i = 0; i < f && tmp && tmp.next; i++) {
            tmp = tmp.next
        }
        
        // connect the list
        if(current) {
            current.next = tmp ? tmp.next : null
        }
    }

    return dummy.next
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
let head = createLinkedList([1, 3, 3, 2, 8, 2, 5, 7, 10, 2, 1]);
let f = 2;
let k = 3;
let modifiedHead = removeFNodesAfterKNodes(head, f, k);
printLinkedList(modifiedHead); // Output: 1 → 3 → 3 → 2 → 5 → 7 → 1