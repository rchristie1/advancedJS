/*
'''
❓ PROMPT
Given an org chart of a company, employee A, and employee B: figure out if employee B is a direct report to employee A.

Employee B must report directly to employee A - this occurs if Employee A is the parent node of Employee B.

Employees in our tree are represented as integer values (eg: 1).

Return true if employee A manages employee B, false if not.

Example(s)
      1  <---- ceo
     / \
    2   3
       / \
      4   5
     /
    6  
isDirectReport(ceo, 1, 2) == True
isDirectReport(ceo, 1, 4) == False
isDirectReport(ceo, 2, 1) == False
isDirectReport(ceo, 2, 3) == False
isDirectReport(ceo, 3, 4) == True
 

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
function isDirectReport(person, manager, employee) {
def isDirectReport(person: Node, manager: int, employee: int) -> bool:
 

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

function isDirectReport(person, manager, employee) {
  if (!person || (!person.left && !person.right)) return false

  let queue = [person]
  let output = false

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift()

      if (node.value === manager) {
        if (node?.left?.value === employee || node?.right?.value === employee) {
          output = true
          break
        }
        {
          break
        }
      } else {
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
  }

  return output
}

//     1
//   2   3
//      4  5
//     6
let ceo = new Node(
  1,
  new Node(2),
  new Node(3, new Node(4, new Node(6)), new Node(5))
)

// 5
let solo = new Node(5)

//   5
// 10
let partner = new Node(5, new Node(10))

console.log("BFS")
console.log(isDirectReport(null, 1, 2) === false)
console.log(isDirectReport(solo, 1, 2) === false)
console.log(isDirectReport(partner, 5, 5) === false)
console.log(isDirectReport(partner, 5, 10) === true)
console.log(isDirectReport(ceo, 1, 2) === true)
console.log(isDirectReport(ceo, 1, 4) === false)
console.log(isDirectReport(ceo, 2, 1) === false)
console.log(isDirectReport(ceo, 2, 3) === false)
console.log(isDirectReport(ceo, 3, 1) === false)
console.log(isDirectReport(ceo, 3, 5) === true)
console.log(isDirectReport(ceo, 4, 5) === false)
console.log(isDirectReport(ceo, 4, 6) === true)
console.log(isDirectReport(ceo, 1, 1) === false)
console.log(isDirectReport(ceo, 4, 4) === false)

// TC: O(V+E)
// SC: O(V)

function isDirectReportDFS(person, manager, employee) {
  if (!person) return false

  if (manager === person.value) {
    if (person?.left?.value === employee || person?.right?.value === employee) {
      return true
    }

    return false
  }

  return (
    isDirectReportDFS(person.left, manager, employee) ||
    isDirectReportDFS(person.right, manager, employee)
  )
}


console.log("\nDFS")
console.log(isDirectReportDFS(null, 1, 2) === false)
console.log(isDirectReportDFS(solo, 1, 2) === false)
console.log(isDirectReportDFS(partner, 5, 5) === false)
console.log(isDirectReportDFS(partner, 5, 10) === true)
console.log(isDirectReportDFS(ceo, 1, 2) === true)
console.log(isDirectReportDFS(ceo, 1, 4) === false)
console.log(isDirectReportDFS(ceo, 2, 1) === false)
console.log(isDirectReportDFS(ceo, 2, 3) === false)
console.log(isDirectReportDFS(ceo, 3, 1) === false)
console.log(isDirectReportDFS(ceo, 3, 5) === true)
console.log(isDirectReportDFS(ceo, 4, 5) === false)
console.log(isDirectReportDFS(ceo, 4, 6) === true)
console.log(isDirectReportDFS(ceo, 1, 1) === false)
console.log(isDirectReportDFS(ceo, 4, 4) === false)