/*
'''
❓ PROMPT
Given a square matrix *mat*, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the
secondary diagonal *that are not part of the primary diagonal*.

Example(s)
Input:
[[1,2,3],
 [4,5,6],
 [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Element mat[1][1] = 5 is counted only once.

Input:
[[1,1,1,1],
 [1,1,1,1],
 [1,1,1,1],
 [1,1,1,1]]
Output: 8

Input: [[5]]
Output: 5
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 
*/

function diagonalSum(matrix) {
    let output = 0;
    if(!matrix.length || !matrix[0].length) return output

    let rLength = matrix.length - 1
    let cLength = matrix[0].length - 1

    let l = 0
    let r = cLength

    while(rLength >= 0) {
        if(l === r) {
            output+=matrix[rLength][l]    
        } else {
            output+=matrix[rLength][r]
            output+=matrix[rLength][l]
        }

        rLength --
        l++
        r--
    }

    return output
}

let mat = 
[[1,2,3],
 [4,5,6],
 [7,8,9]]
console.log(diagonalSum(mat) === 25)

mat =
[[1,1,1,1],
 [1,1,1,1],
 [1,1,1,1],
 [1,1,1,1]]
 console.log(diagonalSum(mat) === 8)
 
 mat = [[5]]
 console.log(diagonalSum(mat) === 5)

 mat = []
 console.log(diagonalSum(mat) === 0)