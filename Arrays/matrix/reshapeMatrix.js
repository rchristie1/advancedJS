/**
 * 
 * @param {[[][]]} mat 
 * @param {Number} r 
 * @param {Number} c 
 * @returns {[]}
 * 
 * In MATLAB, there is a handy function called reshape which can reshape
 * an m x n matrix into a new one with a different size r x c keeping its original data.
 * 
 * You are given an m x n matrix mat and two integers r and c representing the
 * number of rows and the number of columns of the wanted reshaped matrix.
 * 
 * The reshaped matrix should be filled with all the elements of the original 
 * matrix in the same row-traversing order as they were.
 * 
 * If the reshape operation with given parameters is possible and legal, 
 * output the new reshaped matrix; Otherwise, output the original matrix.
 */

function matrix(mat, r, c) {
    const or = mat.length // original row count
    const oc = mat[0].length // orginal col count
    let ori = 0 // original row idx
    let oci = 0; // original col idx

    if(or * oc !== r * c) return mat

    const results = new Array(r)

    const getNext = () => {
        const out = mat[ori][oci]
        oci++
        if(oci === oc) {
            oci = 0
            ori++
        }
        return out
    }

    for (let i = 0; i < r; i++) {
        results[i] = new Array(c)
        for (let j = 0; j < c; j++) {
            results[i][j] = getNext()
        }
    }

    return results
}

console.log(matrix([[1,2],[3,4]], 1, 4)) // [[1,2,3,4]]
matrix([[1,2],[3,4]], 2, 4)
matrix([[1,2],[3,4]], 4, 1)