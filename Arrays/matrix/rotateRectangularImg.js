/*
'''
❓ PROMPT
You are given an image represented as a two dimensional array of pixels. The image can be any aspect ratio. Rotate this image clockwise 90 degrees.

Example(s)
[[0]] -> [[0]]

[[0, 1]] -> [[0], [1]]

[[1, 2]
 [3, 4]]
->
[[3, 1]
 [4, 2]]

'''
*/
function rotateImage(image) {
    const rotated = new Array(image[0].length) // create a new array

    // console.log(rotated);
    
    for (let i = 0; i < rotated.length; i++) {
        rotated[i] = new Array(image.length) // assign each item in the array it's length
    }
    // console.log(rotated);
    
    // find the the inverse of each value and swap them
    for(let i = 0; i < image.length; i++) {
        for(let j = 0; j < image[0].length; j++) {
            rotated[j][image.length - 1 - i] = image[i][j]
        }
    }

    return rotated
}

let img = [[1, 2], [3, 4]]

console.log(rotateImage(img))