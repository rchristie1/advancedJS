class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  //#region My own implemenations
  insertAtBack(data) {
    let current;
    
    if(!this.head) {
        this.head = new Node(data)
    } else {
        current = this.head 
        while (current.next) {
            current = current.next
        }

        current.next = new Node(data)
    }

    this.size++
  }

  insetAtFront(data) {
    let node = new Node(data, this.head)

    this.head = node
    this.size++
  }

  insetAtSpecificIndex(data, idx) {
    if (idx > 0 && idx > this.size) {
        return
    }

    if (idx === 0) {
        return this.head = new Node(data, this.head)
    }

    const node = new Node(data)
    let previous, current;

    current = this.head;
    let count = 0
    
    while(count < idx) {
        previous = current
        current = current.next
        count++
    }

    node.next = current;
    previous.next = node

    this.size++

  }

  removeNodeAtLocation(idx) {
    if(!idx) return
    
    if(idx > 0 && idx > this.size) return

    let count = 0;
    let current, previous;

    current = this.head

    while(count < idx) {
        previous = current
        current = current.next
        count++
    }

    previous.next = current.next
    this.size--
  }

  //#endregion

  // insert first node
  insertFist(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  // insert last node
  insertLast(data) {
    let node = new Node(data)
    let current

    // if empty made it the head
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.size++
  }

  // Insert at index
  insertAt(data, index) {
    if(!index) return
    // If index is out of range
    if (index > 0 && index > this.size) {
      return
    }

    // If is first index
    if (index === 0) {
      // this.head = new Node(data, this.head)
      this.insertFist(data)
      return
    }

    const node = new Node(data)
    let current, previous

    current = this.head
    let count = 0

    while (count < index) {
      previous = current // Node before index
      count++
      current = current.next // Node after index
    }

    node.next = current
    previous.next = node

    this.size++
  }

  // Get at index
  getAt(index) {
    let current = this.head
    let count = 0

    while (current) {
      if (count === index) {
        console.log(current.data)
      }
      count++
      current = current.next
    }

    return null
  }

  // Remove at index
  removeAt(index) {
    if(index > 0 && index > this.size) return

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if(index === 0) {
        this.head = current.next
    } else {
        while(count < index) {
            count++
            previous = current;
            current = current.next;
        }
        previous.next = current.next
    }
    this.size--
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head

    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const f = new Node(200)
console.log(f)

const ll = new LinkedList()

ll.insertFist(100)
ll.insertFist(200)
ll.insertFist(300)

ll.insertLast(400)

ll.insertAt(500, 2)



ll.insertAtBack(99)
// ll.printListData()
ll.insetAtFront(7)
ll.insetAtSpecificIndex(9876, 3)
ll.printListData()
console.log('______________________________________________')
ll.removeNodeAtLocation(2)
ll.printListData()
// ll.getAt(2)


// let arr = [1,2,3,4,5]

// let i = 0;
// let j = arr.length - 1;
// let m = Math.floor(arr.length / 2)

// while (i < j) {
//     left = arr[i]
//     right = arr[j]
//     mid = arr[m]
    
//     if(left > mid) {
//         tmp = left
//         left = mid
//         mid = tmp

//         left++
//     }

//     if(right < mid) {
//         tmp = right
//         right = mid
//         mid = tmp

//         right++
//     }
// }