class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function containsSubtree(root, target) {
    if(!target || !target && !root) return true
    if(!root) return false

    function helper(root, target) {
        console.log(root);
        console.log(target);
        
        if(!root && !target) return true
        if(!root || !target) return false
        if(root.value !== target.value) return false

        return helper(root.left, target.left) || helper(root.right, target.right)
    }

    if(helper(root, target)) return true

    return containsSubtree(root.left, target) || containsSubtree(root.right, target)
}

// Example usage:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

let target = new TreeNode(2);
target.left = new TreeNode(4);
target.right = new TreeNode(5);

console.log(containsSubtree(root, target)); // Output: true

// Main
//      1
//     / \
//    2   3
//   / \
//  4   5

// Sub
//   2
//  / \
// 4   5
