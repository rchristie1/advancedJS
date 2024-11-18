/*
'''
This task is two similar problems in one:
- First, write a function that returns the average of the smallest values in each _column_.
- Write a new version of this function that returns the average of the smallest value in each _row_.

For example, if the for the matrix:

[[1, 5, 3]
 [4, 2, 6]]

The smallest values in each column are 1, 2, and 3. The average of these is 2.

Remember that since we represent a matrix as nested arrays (an array of arrays), 
many problems on a matrix can be broken down into two array patterns. 
This makes them easier to reason about and code. 

Example(s)
matrix = [
  [32, 23, 3],
  [23,  7, 5]
]
averageColumnMinimum(matrix) == 11 (because average(23, 7, 3) = 11)
averageRowMinimum(matrix) == 4 (because average(5, 3) = 4)
*/

function averageColumnMinimum(matrix) {
    if (!matrix.length || !matrix[0].length) return 0
    // store the smallest value of values
    let sum = 0;

    for (let c = 0; c < matrix[0].length; c++) {
        let min = Infinity

        for (let r = 0; r < matrix.length; r++) {
            //   values.push(Math.min(matrix[i][j], matrix[i + 1][j]));
            min = Math.min(matrix[r][c], min);
        }

        sum += min
    }

    // average the values
    return sum / matrix[0].length
}

function averageRowMinimum(matrix) {
    if (!matrix.length || !matrix[0].length) return 0

    let sum = 0;

    for (let r = 0; r < matrix.length; r++) {
        let min = Infinity

        for (let c = 0; c < matrix[0].length; c++) {
            min = Math.min(min, matrix[r][c]);
        }
        sum += min
    }

    // average the values
    return sum / matrix.length
}

let matrix = [[]];
console.log(averageColumnMinimum(matrix) === 0)
console.log(averageRowMinimum(matrix) === 0)

matrix = [[5]];
console.log(averageColumnMinimum(matrix) === 5)
console.log(averageRowMinimum(matrix) === 5)

matrix = [[1, 2, 3]];
console.log(averageColumnMinimum(matrix) === 2)
console.log(averageRowMinimum(matrix) === 1)

matrix = [
    [1],
    [4],
    [7]];
console.log(averageColumnMinimum(matrix) === 1)
console.log(averageRowMinimum(matrix) === 4)

matrix = [
    [5, 5, 5],
    [5, 5, 5]];
console.log(averageColumnMinimum(matrix) === 5)
console.log(averageRowMinimum(matrix) === 5)

matrix = [
    [32, 23, 3],
    [23, 7, 5]];
console.log(averageColumnMinimum(matrix) === 11) 
console.log(averageRowMinimum(matrix) === 4)

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
console.log(averageColumnMinimum(matrix) === 2)
console.log(averageRowMinimum(matrix) === 4)

matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]];
console.log(averageColumnMinimum(matrix) === 3)
console.log(averageRowMinimum(matrix) === 6)
