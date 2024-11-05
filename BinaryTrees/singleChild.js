/*
'''
❓ PROMPT
Given a binary tree, find all nodes that have only one child. Return an array of node values representing each single-child parent in any order.

Example(s)
           1
       2       3
     _   4   _   _
    
should return [2]

           12
       3       4
    1    _   6   _
    
should return [3, 4]

           12
       3       4
    1    _   6   _
  9  _      _ _
    
should return [3, 1, 4]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function hasSingleChildren(root) {
def hasSingleChildren(root: Node) -> list[int]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

class Node {
  constructor(value = 0, leftChild = null, rightChild = null) {
    this.value = value
    this.left = leftChild
    this.right = rightChild
  }
}

function hasSingleChildren(root) {
  if (!root) return []

  const queue = [root]
  const singleChildNodes = []

  while (queue.length > 0) {
    
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift()

      if ((node.left && !node.right) || (node.right && !node.left)) {
        singleChildNodes.push(node.value)
      }

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return singleChildNodes
}

console.log('BFS');
console.log(JSON.stringify(hasSingleChildren(null)) === "[]")

let root = new Node(1)
console.log(JSON.stringify(hasSingleChildren(root)) === "[]")

//   1
// 2
root = new Node(1, new Node(2))
console.log(JSON.stringify(hasSingleChildren(root)) === JSON.stringify([1]))

//   1
// 2   3
root = new Node(1, new Node(2), new Node(3))
console.log(JSON.stringify(hasSingleChildren(root)) === "[]")

//     1
//  2     3
// _ 4   _ _
root = new Node(1, new Node(2, null, new Node(4)), new Node(3))
console.log(JSON.stringify(hasSingleChildren(root)) === JSON.stringify([2]))

//     12
//  3     4
// 1 _   6 _
root = new Node(12, new Node(3, new Node(1)), new Node(4, new Node(6)))
console.log(
  JSON.stringify(hasSingleChildren(root).sort()) ===
    JSON.stringify([3, 4].sort())
)

//     12
//   3     4
//  1 _   6  _
// 9 _   _ _
root.left.left.left = new Node(9)
console.log(
  JSON.stringify(hasSingleChildren(root).sort()) ===
    JSON.stringify([3, 1, 4].sort())
)

// TC: O(V+E) --> number of vertices plus edges
// SC: O(H) --> height of the tree

function hasSingleChildrenDFS(root) {
    let output = []
    
    function helper(root) {
        if(!root) return output
        
        if(root.left && !root.right) {
            output.push(root.value)
        } else if(!root.left && root.right) {
            output.push(root.value)
        }

        helper(root.left)
        helper(root.right)
    }

    helper(root)

    return output
}

console.log('\nDFS');

console.log(JSON.stringify(hasSingleChildrenDFS(null)) === "[]")

root = new Node(1)
console.log(JSON.stringify(hasSingleChildrenDFS(root)) === "[]")

//   1
// 2
root = new Node(1, new Node(2))
console.log(JSON.stringify(hasSingleChildrenDFS(root)) === JSON.stringify([1]))

//   1
// 2   3
root = new Node(1, new Node(2), new Node(3))
console.log(JSON.stringify(hasSingleChildrenDFS(root)) === "[]")

//     1
//  2     3
// _ 4   _ _
root = new Node(1, new Node(2, null, new Node(4)), new Node(3))
console.log(JSON.stringify(hasSingleChildrenDFS(root)) === JSON.stringify([2]))

//     12
//  3     4
// 1 _   6 _
root = new Node(12, new Node(3, new Node(1)), new Node(4, new Node(6)))
console.log(
  JSON.stringify(hasSingleChildrenDFS(root).sort()) ===
    JSON.stringify([3, 4].sort())
)

//     12
//   3     4
//  1 _   6  _
// 9 _   _ _
root.left.left.left = new Node(9)
console.log(
  JSON.stringify(hasSingleChildrenDFS(root).sort()) ===
    JSON.stringify([3, 1, 4].sort())
)