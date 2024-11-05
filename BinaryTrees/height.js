/**
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
✏️ Description
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
Q. Given a binary tree, find the height of the tree.

Example:
• Given a binary tree:
                 1
                / \
               7   3
              / \
             4   5
// returns 2

 */

class TreeNode {
    constructor(value = 0, leftChild = null, rightChild = null) {
        this.value = value
        this.left = leftChild
        this.right = rightChild
    }
}

function findTreeHeight(root) {
    let height = -1
    if (!root) return height

    let queue = [root]

    while (queue.length > 0) {
        height++

        for (let i = 0; i < queue.length; i++) {
            let node = queue.shift()

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    
    return height
}

function findTreeHeightRecursive(root) {
    if(!root) return -1

    return Math.max(findTreeHeightRecursive(root.left), findTreeHeightRecursive(root.right)) + 1
}


function findTreeHeightDFSStack(root) {
    if(!root) return -1
    let stack = [] // initialize an empty stack
    let maxHeight = 0;

    function helper(root) {
        if(!root) { // take the greater of maxheight and stack length once we've reached the leaf
            return maxHeight = Math.max(stack.length, maxHeight)
        }

        stack.push(root) // each iteration push the root onto the stack
        helper(stack.left) // each iteration call the helper to check the left and right
        helper(stack.right)
        stack.pop() // once the bottom is reached and we start to work back up, pop each item off the stack
    }

    helper(root)

    return maxHeight;
}

// Test Cases
console.log('BFS')
console.log(findTreeHeight(null), -1)
console.log(findTreeHeight(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)
console.log(findTreeHeight(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 3)

console.log('\nRecursion')
console.log(findTreeHeightRecursive(null), -1)
console.log(findTreeHeightRecursive(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)
console.log(findTreeHeightRecursive(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 3)

console.log('\nDFS Stack')
console.log(findTreeHeightDFSStack(null), -1)
console.log(findTreeHeightDFSStack(new TreeNode(1, new TreeNode(2), new TreeNode(3))), 1)
console.log(findTreeHeightDFSStack(new TreeNode(2, new TreeNode(29, new TreeNode(26)), new TreeNode(4, null, new TreeNode(2, new TreeNode(9))))), 3)