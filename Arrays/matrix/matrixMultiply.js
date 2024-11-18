/*
'''
❓ PROMPT
In mathematics when two matrices are multiplied, the result is a new matrix where each position (i, j) in the output is the sum of the products of the ith _row_ in the first matrix and the jth _column_ in the second. This is called the [dot product](https://www.mathsisfun.com/algebra/matrix-multiplying.html).

As a follow-up, modify your code to support matrices that are *not* square. This requires that the number of columns in the first matrix be equal to the number of rows in the second so that the row x column cross products are possible.

Example(s)
a = [
  [1, 2],
  [3, 4]
]
b = [
  [5, 6],
  [7, 8]
]
matrixMultiply(a,b) ==
[
  [19,22],
  [43,50]
]
The (0, 0) position in the result is: 1 * 5 + 2 * 7 = 19
The (0, 1) position in the result is: 1 * 6 + 2 * 8 = 22
The (1, 0) position in the result is: 3 * 5 + 4 * 7 = 43
The (1, 1) position in the result is: 3 * 6 + 4 * 8 = 50
 

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
 
*/

function matrixMultiply(a, b) {
    const result = Array.from(Array(a.length), () => 
        new Array(b[0].length).fill(0)
    )

    
    for (let i = 0; i < a.length; i++) { // iterate over all the rows in A
        for (let j = 0; j < b[0].length; j++) { // iterate over all the columns in B
            let value = 0
            for (let k = 0; k < a[0].length; k++) { // iterate over all the columns in A
                // multiply the value at a[rowIdxA][colIdxA]
                // by value at b[colIdxA][rowIdxb]
                value += a[i][k] * b[k][j]
            }
            result[i][j] = value
        }
    }
    return result
}

array.forEach(element => {
    
});

const a = [
    [1, 2],
    [3, 4]
]
const b = [
    [5, 6],
    [7, 8]
]

console.log(matrixMultiply(a, b))