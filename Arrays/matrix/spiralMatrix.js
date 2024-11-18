/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * 
 * @param {[[][]]} m 
 */

function spiral(m) {
    const output = []

    if(!m.length || !m[0].length) return output;

    let colStart = 0;
    let colEnd = m[0].length - 1;

    let rowStart = 0;
    let rowEnd = m.length - 1;

    while(rowStart <= rowEnd || colStart <= colEnd) {
        for(let i = colStart; i <= colEnd; i++) {
            output.push(m[rowStart][i])
        }
        rowStart++

        for (let i = rowStart; i <= rowEnd; i++) {
            output.push(m[i][colEnd])
        }
        colEnd--

        if(rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                output.push(m[rowEnd][i])
            }
        }
        rowEnd--

        if(colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                output.push(m[i][colStart])
            }
        }
        colStart++
    }

    console.log(output)
    return output;
}

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

spiral(matrix) // expected [1, 2, 3, 6, 9, 8, 7, 4, 5]

const matrix2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

spiral(matrix2) // expected [1,2,3,4,8,12,11,10,9,5,6,7]