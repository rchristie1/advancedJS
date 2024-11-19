/**
 * You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
*/


function helper(queue, freshCount, rows, cols, m, mins = 0) {
    const directions = [
        [0, 1],  // Right
        [1, 0],  // Down
        [0, -1], // Left
        [-1, 0]  // Up
    ];

    while (queue.length > 0) {
        const [r, c, time] = queue.shift();
        mins = time

        for (let [dr, dc] of directions) {
            const nr = r + dr
            const nc = c + dc

            // check for boundary errors
            if (nr >= 0 && nr < rows && nc < cols && nc >= 0) {
                // if a fresh orange is found beside one of the rotton ones
                if (m[nr][nc] === 1) {
                    m[nr][nc] = 2 // mark it as rotten
                    freshCount-- // reduce the freshCount
                    queue.push([nr, nc, time + 1]) // push the newly changed item back into the array and increase the time
                }
            }
        }
    }

    return [mins, freshCount]
}

function rottingOranges(m) {
    const rows = m.length
    const cols = m[0].length
    const queue = []
    let freshCount = 0

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (m[r][c] === 2) {
                queue.push([r, c, 0])
            } else if (m[r][c] === 1) {
                freshCount++
            }
        }
    }

    const [mins, fc] = helper(queue, freshCount, rows, cols, m)

    return fc > 0 ? -1 : mins
}

const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];

console.log(rottingOranges(grid)); // Output: 4

const grid2 = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1]
]

console.log(rottingOranges(grid2)); // Output: -1

const grid3 = [
    [2,1,1],
    [1,1,1],
    [0,1,2]
]

console.log(rottingOranges(grid3)); // Output: 2