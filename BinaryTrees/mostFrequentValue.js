/*
'''
❓ PROMPT
Given a binary tree with node values represented as integers, find and return the most frequent node value.

You can assume there will always be a most frequent node and no ties.

Example(s)
    5 <--- root
print(findMostFrequentNodeValue(root) == 5)

    5 <--- root
 10   5
print(findMostFrequentNodeValue(root) == 5)

    6 <--- root
  6   6
 6 6
print(findMostFrequentNodeValue(root) == 6)
 

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
function findMostFrequentNodeValue(root) {
def findMostFrequentNodeValue(root: Node) -> int:
 

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

function findMostFrequentNodeValue(root) {
  let nodeMap = new Map()
  let max = 0
  let el

  function helper(root) {
    if (!root) return

    if (nodeMap.has(root.value)) {
      nodeMap.set(root.vale, nodeMap.get(root.value) + 1)
      if (max < nodeMap.get(root.value)) {
        max = nodeMap.get(root.value)
        el = root.value
      }
    } else {
      nodeMap.set(root.value, 1)
    }

    helper(root.left)
    helper(root.right)
  }

  helper(root)

  return el ? el : root.value
}

let root = new Node(5)
console.log(findMostFrequentNodeValue(root) === 5)

//    5
// 10   5
root = new Node(5, new Node(10), new Node(5))
console.log(findMostFrequentNodeValue(root) === 5)

//    6
//  6   6
// 6 6
root = new Node(6, new Node(6, new Node(6), new Node(6)), new Node(6))
console.log(findMostFrequentNodeValue(root) === 6)

//     5
//  10   1
// 1  7
root = new Node(5, new Node(10, new Node(1), new Node(7)), new Node(1))
console.log(findMostFrequentNodeValue(root) === 1)

//      5
//   2    1
// 3   7   10
//          10
root = new Node(
  5,
  new Node(2, new Node(3), new Node(7)),
  new Node(1, null, new Node(10, null, new Node(10)))
)
console.log(findMostFrequentNodeValue(root) === 10)

//       1
//      2
//     3
//    4
//   5
//  6
// 3
root = new Node(
  1,
  new Node(2, new Node(3, new Node(4, new Node(5, new Node(6, new Node(3))))))
)
console.log(findMostFrequentNodeValue(root) === 3)


// TC: O(N)
// SC: O(N)