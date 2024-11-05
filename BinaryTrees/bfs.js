class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function printLevelOrder(root) {
  if (!root) return []

  let queue = [root]
  let allResults = []

  while (queue.length > 0) {
    // take a snapshot of the queue size because it changes
    let size = queue.length
    let levelResults = []

    console.log(size);
    

    for (let i = 0; i < size; i++) {
      let node = queue.pop() // remove from the right

      if (node.left) queue.unshift(node.left) // add to the left
      if (node.right) queue.unshift(node.right) // add to the left

      levelResults.push(node.val)
    }

    console.log(queue)

    allResults.push(levelResults) // it's a new level
  }
}

//       10
//   5       15
// 2   7  12    17
let leftLeft = new Node(2)
let leftRight = new Node(7)
let rightLeft = new Node(12)
let rightRight = new Node(17)
let left = new Node(5, leftLeft, leftRight)
let right = new Node(15, rightLeft, rightRight)
let root = new Node(10, left, right)




printLevelOrder(root)
