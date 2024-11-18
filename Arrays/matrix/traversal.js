/*
'''
Turn a multidimentional array into a single array
*/

function linearizeRowMajor(matrix) {
  let output = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      output.push(matrix[i][j]);
    }
  }

  return output;
}

function linearizeColumnMajor(matrix) {
  let output = [];
  let maxLen = 0;

  for(let i = 0; i < matrix.length; i++) {
    // only necessary if we dont know if the length of the rows will be the same
    maxLen = Math.max(maxLen, matrix[i].length)
  }

  for (let i = 0; i < maxLen; i++) {
    for (let j = 0; j < matrix.length; j++) {
        // doing this check before prevents undefined from being added to the output
        matrix[j][i] && output.push(matrix[j][i])
    }
  }

  return output;
}

let matrix = [[]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([]))

matrix = [[1]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1]))

matrix = [[1, 2, 3]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1,2,3]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,2,3]))

matrix = [
  [1],
  [4],
  [7]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1,4,7]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,4,7]))

matrix = [
  [1, 2, 3],
  [4, 5, 6]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1,2,3,4,5,6]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,4,2,5,3,6]))

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];
console.log(JSON.stringify(linearizeRowMajor(matrix)) 
=== JSON.stringify([1,2,3,4,5,6,7,8,9]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,4,7,2,5,8,3,6,9]))

matrix = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,6,11,2,7,12,3,8,13,4,9,14,5,10,15]))
