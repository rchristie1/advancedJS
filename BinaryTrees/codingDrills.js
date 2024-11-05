class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  const root = {
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
        left: null,
        right: null
      },
      right: {
        value: 5,
        left: null,
        right: null
      }
    },
    right: {
      value: 3,
      left: {
        value: 6,
        left: null,
        right: null
      },
      right: {
        value: 7,
        left: null,
        right: null
      }
    }
  };
  
  /*
         1
       /   \
      2     3
     / \   / \
    4   5 6   7
  */
  
  
  // 1. Find height of tree using recursion(basic)
  function findHeight(root) {
    if (!root) return 0
  
    // console.log('root', root)
    // const leftHeight = findHeight(root.left)
    // console.log('after', leftHeight)
    // const rightHeight = findHeight(root.right)
  
    return Math.max(findHeight(root.left), findHeight(root.right)) + 1
  }
  
  // console.log(findHeight(root))
  
  
  
  // 2. Find height of tree using BFS(queue)
  function findHeightBFS(root) {
    if(!root) return 0;

    let queue = [root]
    let depth = 0

    while(queue.length > 0) {
        depth++
        for(let i = 0; i < queue.length; i++) {
            const node = queue.shift() // remove first value

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }

    return depth
  }
  
  
  
  
  // 3. Find height of tree using DFS(stack)
  function findHeightStack(root) {
    const stack = []
    let maxHeight = 0
  
    function helper(root) {
      if (!root) {
        maxHeight = Math.max(maxHeight, stack.length)
        return
      }
  
      stack.push(root)
      helper(root.left)
      helper(root.right)
      stack.pop()
    }
  
    helper(root)
  
    return maxHeight
  }
  
  console.log(findHeightStack(root))
  console.log(findHeightBFS(root))
  
  
  
  
  // 4. Find longest continuous path from the root.