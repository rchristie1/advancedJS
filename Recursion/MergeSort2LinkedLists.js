class Node {
    constructor (value, next = null) {
        this.value = value
        this.next = next
    }
}

function mergeSortedLinkedListsIterative (list1, list2) {
    if(!list1) return list2
    if(!list2) return list1

    let head = new Node(0)
    let current = head

    while(list1 !== null && list2 !== null) {
        if (list1.value < list2.value) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }

        current = current.next
    }

    // attach the reminain nodes
    current.next = list1 !== null ? list1 : list2

    return head
}

function mergeSortedLinkedLists (list1, list2) {
    if(!list1) return list2
    if(!list2) return list1

    if(list1.value < list2.value) {
        list1.next = mergeSortedLinkedLists(list1.next, list2)
        return list1
    } else {
        list2.next = mergeSortedLinkedLists(list1, list2.next)
        return list2
    }
}

const LL1 = new Node(1, new Node(3, new Node(4)))
const LL2 = new Node(2, new Node(5, new Node(6)))



// console.log(mergeSortedLinkedLists(LL1, LL2))
console.log(mergeSortedLinkedListsIterative(LL1, LL2))


// mergeSortedLinkedLists([1, 3, 4], [2, 5, 6]) -> [1, 2, 3, 4, 5, 6]