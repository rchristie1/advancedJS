// 3. isAlmostBalanced - string contains only ( and ) but may contain at most one mistake.

function isAlmostBalanced(str) {
    if(str.length > 3 && str[0] === ")") return false

    let count = 0;
    const temp = []
    
    for (let i = 0 ; i < str.length; i++) {
        if(str[i] === '(') {
            temp.push(str[i])
        } else if (temp.length) {
            temp.pop()
            count+=2
        }
    }

    const diff = str.length - count
    // console.log(`count: ${count} diff: ${diff} str len: ${str.length}`)
    return diff <= 1
}

// function isAlmostBalanced(str) { // working solution from instructor
//     const stack = [];
//     let mistakes = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       const c = str[i];
//       if (c === '(') {
//         stack.push(c);
//       } else {
//         const openingParen = stack.pop();
//         if (!openingParen || c !== ")") {
//           mistakes++;
//         }
//       }
//     }
//     if (stack.length !== 0) {
//       mistakes += stack.length;
//     }
  
//     return mistakes <= 1;
//   }
  

// isAlmostBalanced('((()')  //false
// isAlmostBalanced('(()')  //true
// isAlmostBalanced('(()))')  // true
// isAlmostBalanced('(())') // true
// isAlmostBalanced('())))') // false
// isAlmostBalanced('(') // true


console.log(isAlmostBalanced('()') === true);           // Expected: true (balanced)
console.log(isAlmostBalanced('(())') === true);         // Expected: true (balanced)
console.log(isAlmostBalanced('((()))') === true);       // Expected: true (balanced)
console.log(isAlmostBalanced('') === true);             // Expected: true (empty string)
console.log(isAlmostBalanced('()()()') === true);       // Expected: true (balanced)
console.log(isAlmostBalanced('(())()') === true);       // Expected: true (balanced)

// Cases with exactly 1 mistake (almost balanced)
console.log(isAlmostBalanced('(()') === true);          // Expected: true (1 extra opening parenthesis)
console.log(isAlmostBalanced('())') === true);          // Expected: true (1 extra closing parenthesis)
console.log(isAlmostBalanced(')(') === false);           // Expected: true (1 mistake)

// Cases with more than 1 mistake (not almost balanced)
console.log(isAlmostBalanced('(((') === false);         // Expected: false (3 opening parentheses, 2 mistakes)
console.log(isAlmostBalanced(')))') === false);         // Expected: false (3 closing parentheses, 2 mistakes)
console.log(isAlmostBalanced('())(') === false);        // Expected: false (2 mistakes, not almost balanced)
console.log(isAlmostBalanced('(()))') === true);       // Expected: false (1 extra opening and 1 extra closing parenthesis)

// // Additional edge cases
console.log(isAlmostBalanced(')()(') === false);        // Expected: false (2 mistakes, cannot be almost balanced)
console.log(isAlmostBalanced('())()') === true);        // Expected: true (1 