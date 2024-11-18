/*
'''
❓ PROMPT
Write a function that traverses a matrix in diagonal fashion, 
starting from the bottom left corner. For example if the input matrix is:

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

Then the desired output is:

[7, 4, 8, 1, 5, 9, 2, 6, 3]

Create a new array for the linearized output to be returned.

Example(s)
[
  [1, 2],
  [3, 4],
] -> [3, 1, 4, 2]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 
*/

function diagonalTraversal(m) {
    if (m.length === 0 || m[0].length === 0) return [];

    let nr = m.length;
    let nc = m[0].length;

    const starts = []
    
    for (let i = nr - 1; i > 0; i--) {
        starts.push([i, 0])   
    }

    for (let i = 0; i < nc; i++) {
        starts.push([0, i])
    }

    console.log(starts);
    

    const output = []
    // For each [starting row index, starting column index] pair...
    for(const [sr, sc] of starts) {
        // Beginning at this location, traverse diagonally.
        for(let i = 0; sr + i < nr && sc + i < nc; i++) {
            output.push(m[sr + i][sc + i])
        }
    }

    console.log(output)
    return output
}

const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

diagonalTraversal(m)