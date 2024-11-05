class Node {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

// iterative
function reverseLinkedList(list) {
    if (!list) return list

    let curr = list
    let prev;

    while(curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    console.log(prev)
}

const LL1 = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))))

// reverseLinkedList(LL1)

function reverseLinkedListRecursive(list, prev = null) {
    if(!list) return list

    prev = list.next
    let next = list.next
    let reverseHead = reverseLinkedListRecursive(next, prev)

    console.log(list)
}

reverseLinkedListRecursive(LL1)