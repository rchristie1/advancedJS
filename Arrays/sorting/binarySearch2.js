/**
 * 
 * @param {Array} arr of numbers
 * @param {Number} k any
 * @returns index of number if true or -1 if false
 */

function binarySearch(arr, k) {
    if(!arr.length || 
        k > arr[arr.length - 1]|| 
        k < arr[0]
    ) return -1
    
    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        const mid = Math.floor((l+r) / 2)

        if(arr[mid] === k) {
            return mid;
        } else if(arr[mid] < k) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }

    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 10) === -1)
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 1) === 0)
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 2) === 1)
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 3) === 2)
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 4) === 3)
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 5) === 4)
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 6) === 5)
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7) === 6)
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 8) === 7)
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 9) === 8)
