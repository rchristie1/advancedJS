// Given two sorted linked lists of integers, return a list that includes the values in both.

// Singly-linked lists are already defined with this interface:
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function solution(a, b) {
    if(!a || !b) return []
    
    let setA = new Set()
    let sharedValues = []
    let outputList = new ListNode(null)
    
    let curr = a
    while(curr) {
        setA.add(curr.value)
        curr = curr.next
    }
    
    curr = b
    while(curr) {
        if(setA.has(curr.value)) {
            sharedValues.push(curr.value)
        }
        curr = curr.next
    }
    
    sharedValues.forEach(value => {
        let tmp = outputList
        
        while(tmp && tmp.next) {
            tmp = tmp.next
        }
        
        tmp.next = new ListNode(value)
    })
    
    return outputList.next
}

function mergeSortedLists(list1, list2) {
    let dummy = new ListNode(null)
    let current = dummy

    while(list1 && list2) {
        if (list1.value === list2.value) {
            current.next = new ListNode(list1.value)
            current = current.next
            list1 = list1.next
            list2 = list2.next
        } else if(list1.value < list2.value) {
            list1 = list1.next
        } else if(list2.value < list1.value) {
            list2 = list2.next
        }
    }

    return dummy.next
}

// Helper function to create a linked list from an array
function createLinkedList(array) {
    let dummy = new ListNode();
    let current = dummy;
    for (let value of array) {
        current.next = new ListNode(value);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    let result = [];
    while (head !== null) {
        result.push(head.value);
        head = head.next;
    }
    return result;
}

// Example usage:
let list1 = createLinkedList([1, 4, 5, 7]);
let list2 = createLinkedList([2, 4, 6, 6, 7]);
let intersectionList = mergeSortedLists(list1, list2);

console.log(linkedListToArray(intersectionList)); // Output: [4, 7]
