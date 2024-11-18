// use map
// function rotateImageClockwise(matrix) {
//     // Transpose the matrix
//     let transposedMatrix = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    
//     // Reverse each row in the transposed matrix to complete the 90-degree rotation
//     let rotatedMatrix = transposedMatrix.map(row => row.reverse());

//     return rotatedMatrix;
// }

function rotateImageClockwise(matrix) {
    let n = matrix.length;
    let rotatedMatrix = [];

    // Create an empty matrix with the same size as the original
    for (let i = 0; i < n; i++) {
        rotatedMatrix.push([]);
    }

    // Fill the rotated matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotatedMatrix[j][n - i - 1] = matrix[i][j];
        }
    }

    return rotatedMatrix;
}

// Example
let image = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let rotatedImage = rotateImageClockwise(image);
rotatedImage.forEach(row => console.log(row));

function rotateImageClockwiseRect(matrix) {
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    let rotatedMatrix = [];

    // Create an empty matrix with flipped dimensions (numCols x numRows)
    for (let i = 0; i < numCols; i++) {
        rotatedMatrix.push([]);
    }

    // Fill the rotated matrix
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            rotatedMatrix[j][numRows - i - 1] = matrix[i][j];
        }
    }

    return rotatedMatrix;
}


console.log(rotateImageClockwiseRect([[0]]));
console.log(rotateImageClockwiseRect([[0, 1]]));
console.log(rotateImageClockwiseRect([[0], [1]]));
console.log(rotateImageClockwiseRect([[0, 1], [2, 3]]));
console.log(rotateImageClockwiseRect([[0, 1, 2], [3, 4, 5]]));
console.log(rotateImageClockwiseRect([[0, 1], [2, 3], [4, 5]]));