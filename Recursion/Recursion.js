class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

function printLL(head) {
    if(!head) return

    // adds to the stack
    console.log(head.data); // will print the list as it's returned
    
    printLL(head.next)
    
    //unloading the stack
    console.log(head.data); // will print the list in reverse
    
}

console.log('hi');

let LL = new Node('a', new Node('b', new Node('c', new Node('d', new Node('e')))))

printLL(LL)