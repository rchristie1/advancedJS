/** 
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a binary tree, find the element with the largest value.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
// returns 7
*/

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

// function findTreeMax(root, max = 0) {
//     if(!root) return null

//     if(root.value > max) {
//         max = root.value
//     }

//     max = Math.max(root.value, max)

//     if(root.left) {
//         max = Math.max(root.left?.value, max)
//         findTreeMax(root.left, max)
//     }

//     if(root.right) {
//         max = Math.max(root.right?.value, max)
//         findTreeMax(root.right, max)
//     }
        

//     return max
// }


// FORMATION SOLUTION
function findTreeMax(root) {   
    if (!root) {
      return null
    }
    
    return Math.max(root.value, 
                    findTreeMax(root.left),
                    findTreeMax(root.right))
}



console.log(findTreeMax(null)) // null
console.log(findTreeMax(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(findTreeMax(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 29
console.log(findTreeMax(new TreeNode(1))) // 1