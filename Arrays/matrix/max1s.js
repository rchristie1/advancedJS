// Find the row with the maxium sum in the matrix

const findMax = (mat) => {
    let r = mat.length
    let c = mat[0].length
    let _map = new Map();
    let max = []

    for (let i = 0; i < r; i++) {
        let tmpMax = 0 

        for (let j = 0; j < c; j++) {
            tmpMax += mat[i][j]
        }

        max.push(tmpMax)
        _map.set(i, tmpMax)

        console.log(tmpMax)
        console.log(max)
    }

    console.log(max.sort().reverse()[0])
    console.log(max);


    let nm = [0,0]
    _map.forEach((value, key) => {
        if (value > nm[1]) {
            nm = [key, value]
        }
    });

    console.log(nm);
}

const mat = [
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

findMax(mat)