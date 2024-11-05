class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function getMaxDepth(root) {
  let leftDepth, rightDepth

  if (!root) {
    return 0
  }

  leftDepth = getMaxDepth(root.left)
  rightDepth = getMaxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1
}

//       10
//   5       15
// 2   7  12    17
let [leftLeft, leftRight] = [new Node(2), new Node(7)]
let [rightLeft, rightRight] = [new Node(12), new Node(17)]
let left = new Node(5, leftLeft, leftRight)
let right = new Node(15, rightLeft, rightRight)
let root = new Node(10, left, right)

console.log(getMaxDepth(root))

rightLeft.right = new Node(13)
// now the tree looks like
//
//       10
//   5       15
// 2   7  12    17
//          13

console.log(getMaxDepth(root))
