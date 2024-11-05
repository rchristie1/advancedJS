// Define the tree node structure
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Function to get the right-side view of the binary tree
function rightSideView(root) {
    if (!root) return []

    const output = []
    let queue = [root]

    while(queue.length) {
        let len = queue.length;

        for(let i = 0; i < len; i++) {
            const node = queue.shift()

            if(i === len - 1) {
                output.push(node.value)
            }

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }

    return output
}

// Example usage:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log(rightSideView(root)); // Output: [1, 3, 4]