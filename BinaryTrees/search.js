class ListNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// Creating the following tree and searching through it
//             21
//      14             28
//  11     18      25      32
// 5 12   15 19   23 27   30 37
let a = new ListNode(5)
let b = new ListNode(12)
let c = new ListNode(15)
let d = new ListNode(19)
let e = new ListNode(23)
let f = new ListNode(27)
let g = new ListNode(30)
let h = new ListNode(37)
let leftLeft = new ListNode(11, a, b)
let leftRight = new ListNode(18, c, d)
let rightLeft = new ListNode(25, e, f)
let rightRight = new ListNode(32, g, h)
let left = new ListNode(14, leftLeft, leftRight)
let right = new ListNode(28, rightLeft, rightRight)
let root = new ListNode(21, left, right)

function iterativeSearchInBST(root, target) {
  let cur = root

  while (cur) {
    if (target == cur.val) return cur
    // less than root so go left
    else if (target < cur.val) cur = cur.left
    // greater than root so go right
    // target > cur.val
    else cur = cur.right
  }
  return null
}

function recursiveSearchInBST(root, target) {
  if (!root) return null

  if (target == root.val) return root
  // less than root so go left
  else if (target < root.val) return recursiveSearchInBST(root.left, target)

  // greater than root so go right
  return recursiveSearchInBST(root.right, target)
}

let target1 = 27
let target2 = 29

//             21
//      14             28
//  11     18      25      32
// 5 12   15 19   23 27   30 37
iterativeSearchInBST(root, target1)
recursiveSearchInBST(root, target1)
