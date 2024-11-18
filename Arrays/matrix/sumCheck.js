/*
'''
❓ PROMPT
Given two arrays, `rowSums` and `columnSums`, and a rectangular matrix. 
Check to see if the two arrays are correct with respect to the matrix. 
Return true if the ith row sums to the value in `rowSums[i]` for every i and if 
the jth column sums to `columnSums[j]` for every j. Return false if any of these 
are incorrect.

Example(s)
matrix = [
  [1, 2],
  [3, 4]
]
rowSums = [3, 7]
columnSums = [4, 6]

will return true.

matrix = [
  [1, 2],
  [3, 4]
]
rowSums = [3, 7]
columnSums = [4, 7]

will return false.
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
*/

// function checkSums(matrix, rowSums, columnSums) {
//     let colSum = [];
//     let rowSum = [];

//     for(let i = 0; i < matrix.length; i++) {
//         let sum = 0
//         for(let j = 0; j < matrix[i].length; j++) {
//             sum+=matrix[i][j]
//         }
//         colSum.push(sum)
//     }
    
//     for(let i = 0; i < matrix[0].length; i++) {
//         let sum = 0
//         for(let j = 0; j < matrix.length; j++) {
//             sum+=matrix[i][j]
//         }
//         rowSum.push(sum)
//     }
    
//     return [rowSum, colSum]
// }

function checkSums(matrix, rowSums, columnSums) {
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        const value = matrix[r][c];
        
        rowSums[r] -= value;
        columnSums[c] -= value;
        
        
        console.log('value', value);
        console.log('rs', rowSums)
        console.log('cs', rowSums)
      }
    }
    return (
      rowSums.reduce((acc, curr) => acc && curr === 0, true)
      && columnSums.reduce((acc, curr) => acc && curr === 0, true)
    );
  }

console.log(checkSums(
    [[1, 2], [3, 4]],
    [3, 7],
    [4, 6]
  ), true);
  
//   console.log(checkSums(
//     [[1, 2, 3], [4, 5, 6]],
//     [6, 15],
//     [5, 7, 9]
//   ), true);
  
//   console.log(checkSums(
//     [[1, 2], [3, 4]],
//     [3, 7],
//     [4, 7]
//   ), false);
  
//   console.log(checkSums(
//     [[1, 2], [3, 4]],
//     [3, 7],
//     [4, 5]
//   ), false);