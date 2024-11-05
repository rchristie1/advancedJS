function binarySearch(arr) {
    if(!arr) return arr
    if(arr.length === 1) return arr[0]
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2)

        if(arr[mid] > arr[right]) {
            left = mid+1
        } else {
            right = mid
        }
    }

    return arr[left]
}

console.log(binarySearch([3, 4, 5, 6, 1, 2]))