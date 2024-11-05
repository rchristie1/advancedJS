/*
'''
❓ PROMPT
You are given four arrays representing two lists of operands, one list of operators, and a list of results. For any index, i, your task is to check to see if:

operands1[i] operators[i] operands2[i] = results[i]

For input arrays arrays like:

operands1 = [1, 2]
operators = ['+', '-']
operands2 = [2, 3] 
results = [3, 0]

then the result of this function should be [true, false] since 1 + 2 = 3 and 2 - 3 ≠ 0.

The numbers will be integers, and the signs can be "+", "-", "*", "/". Round to the nearest whole number for division.

Example(s)
Given the following:

operands1 = [1, 2]
operators = ['+', '-']
operands2 = [2, 3] 
results = [3, 0]

At index 0, we have 1 + 2 = 3. This evaluation is True
At index 1, we have 2 - 3 = 0. This evaluation is False

We should return [True, False] as there are two operands in the input list.

Another Example:
operands1_1 = [1, 5, 2]
operators_1 = ['+', '-', '*']
operands2_1 = [2, 3, 4]
results_1 = [3, 2, 8]

At index 0, we have 1 + 2 = 3. This evaluation is True
At index 1, we have 5 - 3 = 2. This evaluation is True
At index 2 we have 2 * 4 = 8. This evaluation is True

We should return [True, True, True]
 

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
function checkArithmeticExpressions(operands1, operators, operands2, results) // returns an array of booleans
def check_arithmetic_expressions(operands1, operators, operands2, results): -> list[bool]
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function checkArithmeticExpressions(operands1, operators, operands2, results) {
    let len = operands1.length
    const output = []


    function helper(num1, num2, op) {
        let output
        switch (op) {
            case '+':
                output = num1 + num2
                break;
            case '-':
                output = num1 - num2
                break;
            case '/':
                output = num1 / num2 
                break;
            case '*':
                output = num1 * num2
                break;
        
            default:
                break;
        }

        return output;
    }

    for(let i = 0; i < len; i++) {
        
        Math.round(helper(operands1[i], operands2[i], operators[i])) === results[i] ? output.push(true) : output.push(false)
    }

    return output
}

// Test Case 1: Basic arithmetic operations
let operands1 = [3, 5, 2, 9];
let operators = ['+', '-', '*', '/'];
let operands2 = [2, 3, 4, 3];
let results = [5, 2, 8, 3];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: [true, true, true, true]

// Test Case 2: Incorrect results
operands1 = [3, 5, 2, 9];
operators = ['+', '-', '*', '/'];
operands2 = [2, 3, 4, 3];
results = [6, 1, 7, 4];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: [false, false, false, false]

// Test Case 3: Mixed correct and incorrect results
operands1 = [10, 15, 8, 12];
operators = ['-', '*', '+', '/'];
operands2 = [5, 3, 4, 4];
results = [5, 45, 12, 2];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: [true, true, true, false]

// Test Case 4: Empty arrays
operands1 = [];
operators = [];
operands2 = [];
results = [];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: []

// Test Case 5: Division with rounding
operands1 = [7, 10, 15, 27];
operators = ['/', '/', '/', '/'];
operands2 = [2, 3, 4, 5];
results = [4, 3, 4, 5];
console.log(checkArithmeticExpressions(operands1, operators, operands2, results));  // Output: [true, true, true, true]