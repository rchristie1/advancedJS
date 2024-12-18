class Node {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

function reverseList(head) {
    let curr = head
    let prev = null
    
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}

function addOne(head) {
    let curr = head

    // reverse the LL
    let reversedList = reverseList(curr)

    let currReversed = reversedList

    while (currReversed) {
        if(currReversed.val < 9) {            
            currReversed.val = currReversed.val + 1
            break
        } else {
            currReversed.val = 0
            if(currReversed.next === null) {
                curr.next = new Node(1)
                break;
            }
            currReversed = currReversed.next
        }
    }

    let unreversedList = reverseList(reversedList)

    console.log(unreversedList);
    return unreversedList
}


const LL = new Node(1, new Node(2, new Node(3)))
const LL2 = new Node(9, new Node(9))

addOne(LL)
addOne(LL2)