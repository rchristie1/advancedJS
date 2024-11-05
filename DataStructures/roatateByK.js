function rotateLeft (arr, k) {
    for (let i = 0; i < k; i++) {
        // each time we enter the loop take the first item out of the array and push it back in
        arr.push(arr.shift())
    }

    return arr
}


function rotateLeft2 (arr, k) {
    if(k === 0 || k === arr.length) return arr

    if (k > arr.length) {
        k = k % arr.length
    }

    arr.reverse()
    reverseSortHelper(arr, 0, arr.length - 1 - k)
    reverseSortHelper(arr, arr.length - k, arr.length - 1)

    return arr;
}

function reverseSortHelper(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}

console.log(JSON.stringify(rotateLeft2([1, 2, 3, 4], 0)) == '[1,2,3,4]')
console.log(JSON.stringify(rotateLeft2([1, 2, 3, 4], 1)) == '[2,3,4,1]')
console.log(JSON.stringify(rotateLeft2([1, 2, 3, 4], 2)) == '[3,4,1,2]')
console.log(JSON.stringify(rotateLeft2([1, 2, 3, 4], 3)) == '[4,1,2,3]')
console.log(JSON.stringify(rotateLeft2([1, 2, 3, 4], 4)) == '[1,2,3,4]')
console.log(JSON.stringify(rotateLeft2([1, 2, 3, 4], 5)) == '[2,3,4,1]')
console.log(JSON.stringify(rotateLeft2([1, 2, 3, 4], 8)) == '[1,2,3,4]')
console.log(JSON.stringify(rotateLeft2([2, 4, 6, 8, 10], 0)) == '[2,4,6,8,10]')
console.log(JSON.stringify(rotateLeft([2, 4, 6, 8, 10], 1)) == '[4,6,8,10,2]')
console.log(JSON.stringify(rotateLeft([2, 4, 6, 8, 10], 2)) == '[6,8,10,2,4]')
console.log(JSON.stringify(rotateLeft([2, 4, 6, 8, 10], 3)) == '[8,10,2,4,6]')
console.log(JSON.stringify(rotateLeft([2, 4, 6, 8, 10], 4)) == '[10,2,4,6,8]')
console.log(JSON.stringify(rotateLeft([2, 4, 6, 8, 10], 5)) == '[2,4,6,8,10]')
console.log(JSON.stringify(rotateLeft([2, 4, 6, 8, 10], 6)) == '[4,6,8,10,2]')
console.log(JSON.stringify(rotateLeft([2, 4, 6, 8, 10], 10)) == '[2,4,6,8,10]')