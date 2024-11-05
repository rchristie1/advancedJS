// ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
// ✏️ Description
// ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
// Q. Given a binary tree, count the number of elements in the tree.

// Example:
// • Given a binary tree:
//                  1
//                 / \
//                7   3
//               / \
//              4   5
// // returns 5

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}
        
function countTree(root) {
    if(!root) return null
    
    return 1 + (countTree(root.left) + countTree(root.right))
}

function countTreeIterative(root) {
    if(!root) return null
    
    let stack = [root];
    let count = 0

    while(stack.length) {
        count++
        let node = stack.shift()
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }

    return count
}

// Test Cases
console.log(countTreeIterative(null)) // 0
console.log(countTreeIterative(new TreeNode(1, new TreeNode(2), new TreeNode(3)))) // 3
console.log(countTreeIterative(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9)))))) // 6
console.log(countTreeIterative(new TreeNode())) // 1