/* 
Find the largest sum root to leaf

                 5
               /  \
              6    9
             /\    /\
            2  3  1  1
*/

class BTNode {
    constructor(value, left, right) {
        this.value = value
        this.left = left
        this.right = right
    }
}

const tree = new BTNode(5,
    new BTNode(6, new BTNode(2), new BTNode(3)),
    new BTNode(9, new BTNode(1), new BTNode(1)),
)


function findLargestPath(root) {
    const stack = []
    let largestSoFar = Number.MIN_VALUE

    function dfsHelper(root) {
        // Base case if node is a leaf
        if(!root.left && !root.right) {
            const sum = stack.reduce((a, total) => a + total, 0)
            largestSoFar = Math.max(sum + root.value, largestSoFar)
            return;
        }

        stack.push(root.value)

        if (root.left){
            dfsHelper(root.left)
        }
        if(root.right) {
            dfsHelper(root.right)
        }

        stack.pop()
    }

    if(root) {
        dfsHelper(root)
    }

    return largestSoFar
}

function findLargestPathSum(root) {
    let largestSoFar = Number.MIN_VALUE

    function dfsHelper(root, totalSoFar) {
        
        if(!root.left && !root.right) {
            largestSoFar = Math.max(root.value + totalSoFar, largestSoFar)
            return
        }

        if (root.left){
            dfsHelper(root.left, totalSoFar + root.value)
        }
        if(root.right) {
            dfsHelper(root.right, totalSoFar + root.value)
        }
    }

    if(root) {
        dfsHelper(root, 0)
    }

    return largestSoFar
}

console.log(findLargestPath(tree) === 15 ? "pass" : "fail");
console.log(findLargestPathSum(tree) === 15 ? "pass" : "fail");
