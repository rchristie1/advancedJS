/*
'''
Given a two dimensional array, output a new one dimensional array with the elements of the input
in zig zag order.This means that the first row will be in the output from first to last, but the
second row will be the reverse, last to first, then the third is back to normal order again, each
row the opposite order of the ones before and after.
*/

function linearizeZigZag(matrix) {
    let output = [];
    if(!matrix.length || !matrix[0].length) return output
    
    for(let r = 0; r < matrix.length; r++) {
        if(r % 2 === 0) {
            for (let c = 0; c < matrix[r].length; c++) {
               output.push(matrix[r][c]) 
            }
        } else {
            for (let c = matrix[r].length - 1; c >= 0; c--) {
               output.push(matrix[r][c]) 
            }
        }
    }

    return output
}

// Time: O(n2)
// Space: O(n2)

let matrix = [[]];
console.log(JSON.stringify(linearizeZigZag(matrix)) 
=== JSON.stringify([]))

matrix = [[1]];
console.log(JSON.stringify(linearizeZigZag(matrix)) 
=== JSON.stringify([1]))

matrix = [[1, 2, 3]];
console.log(JSON.stringify(linearizeZigZag(matrix)) 
=== JSON.stringify([1,2,3]))

matrix = [
  [1],
  [4],
  [7]];
console.log(JSON.stringify(linearizeZigZag(matrix)) 
=== JSON.stringify([1,4,7]))

matrix = [
  [1, 2, 3],
  [4, 5, 6]];
console.log(JSON.stringify(linearizeZigZag(matrix)) 
=== JSON.stringify([1,2,3,6,5,4]))

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];
console.log(JSON.stringify(linearizeZigZag(matrix)) 
=== JSON.stringify([1,2,3,6,5,4,7,8,9]))