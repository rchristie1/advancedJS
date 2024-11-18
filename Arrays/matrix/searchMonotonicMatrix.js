/*
'''
❓ PROMPT
A monotonic matrix is one where all of the rows and columns are sorted. 
A simple example is:

1  5
2  7

Notice that each row (read left to right) is sorted and so is each column (read top to bottom).
Importantly, if we read from one row to the next, the first value in each row might be smaller 
than that last one in the previous row.

Given a matrix that is guaranteed to follow this monotonic property and a target value, 
determine if the value exists in the matrix. Return true if it does and false otherwise. 

This might remind you of a problem you may have seen on Leetcode, 
but there is an important difference that leads to a different algorithm, 
something that rules out the approach that works neatly in the Leetcode version!

Example(s)
1   5   7  10  15
3   8  10  17  20
5  11  12  18  22
9  13  19  21  25

Search for values such as 5, 10, and 21 which exist (so return true) and 6, 2, 16, and 23 
which do not exist and return false.
 

🔎 EXPLORE
List your assumptions & discoveries:
To reduce the time of search i'm going to approach this problem by first checking 
if the target value is between the start number and end number of a row, if so then
i'm going to perform a binary search on the row.

Insightful & revealing test cases:


🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
*/

function searchMatrix(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false

    let n = matrix.length

    for(let i = 0; i < n; i++) {
        if(matrix[i][0] <= target || matrix[i][n-1] >= target) {
            let l = 0
            let r = matrix[0].length - 1

            while (l <= r) {
                let m = Math.floor((l+r) / 2)

                // if the mid idx is the target value return early
                if (matrix[i][m] === target) return true

                if(matrix[i][m] < target) {
                    l = m+1
                } else {
                    r = m-1
                }
            }
        }
    }

    return false
}

const test1 = [
    [1,   5,   7,  10,  15],
    [3,   8,  10,  17,  20],
    [5,  11,  12,  18,  22],
    [9,  13,  19,  21,  25],
  ];
  
  console.log(searchMatrix(test1, 1), true);
  console.log(searchMatrix(test1, 25), true);
  console.log(searchMatrix(test1, 12), true);
  console.log(searchMatrix(test1, 10), true);
  console.log(searchMatrix(test1, 5), true);
  console.log(searchMatrix(test1, 21), true);
  
  console.log(searchMatrix(test1, 0), false);
  console.log(searchMatrix(test1, 27), false);
  console.log(searchMatrix(test1, 4), false);
  console.log(searchMatrix(test1, 24), false);
  console.log(searchMatrix(test1, 14), false);
  
  const test2 = [
    [1,   5,   7,  10],
    [3,   8,  10,  17],
    [5,  11,  12,  18],
    [9,  13,  19,  21],
  ];
  
  console.log(searchMatrix(test2, 1), true);
  console.log(searchMatrix(test2, 12), true);
  console.log(searchMatrix(test2, 10), true);
  console.log(searchMatrix(test2, 5), true);
  console.log(searchMatrix(test2, 21), true);
  
  console.log(searchMatrix(test2, 0), false);
  console.log(searchMatrix(test2, 27), false);
  console.log(searchMatrix(test2, 4), false);
  console.log(searchMatrix(test2, 24), false);
  console.log(searchMatrix(test2, 14), false);