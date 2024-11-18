/*
'''
❓ PROMPT
Given a square matrix, transpose the matrix across it's major diagonal axis.
The major diagonal is the diagonal who's row and column indices are equal. 
For example, consider the matrix:

1  2  3
4  5  6
7  8  9

The major diagonal is 1, 5, 9 and then the transposition results in:

1  4  7
2  5  8
3  6  9

Notice that the major diagonal values don't change.

This operation can be done by creating a new output matrix OR it can be done in place.
The goal is to do this in place, but it might be easier to start with creating a new 
output matrix.

Part 2:
Now do the same thing, but transpose across the opposite diagonal, this time the 
diagonal in the example that is 7, 5, 3. Once again, those values won't change position, 
but everything else will! Now, our original 3x3 matrix from above becomes:

9  6  3
8  5  2
7  4  1

Example(s)
see above
 

🔎 EXPLORE
List your assumptions & discoveries:
The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
This can be done by creating a new matrix by iterating over columns then rows instead of rows then columns
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
*/

// function transposeMajor(m) { // New Array
//     const rLen = m.length
//     const cLen = m[0].length

//     let output = [];

//     for(let i = 0; i < rLen; i++) {
//         let tmp = [];
//         for(let j = 0; j < cLen; j++) {
//             tmp.push(m[j][i])
//         }
//         output.push(tmp)
//     }

//     return output
// }

function transposeMajor(m) { // in place
    const n = m.length

    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            [m[i][j], m[j][i]] = [m[j][i], m[i][j]]
        }
    }

    return m
}

function transposeMinor(m) {
    let n = m.length

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            const symR = n - j - 1;
            const symC = n - i - 1;
            [m[i][j], m[symR][n - i - 1]] = [m[symR][symC], m[i][j]];
        }

    }
}


// Make and fill a test matrix
function makeTestMatrix(n) {
    const a = "a".charCodeAt(0);
    let i = 0;
    return Array.from({ length: n },
      () => Array.from({ length: n }, () => String.fromCharCode(a + i++))
    );
  }
  
  for (let i = 0; i <= 5; i++) {
    console.log("Transpose major:", transposeMajor(makeTestMatrix(i)));
    console.log("Transpose minor:", transposeMinor(makeTestMatrix(i)));
  }