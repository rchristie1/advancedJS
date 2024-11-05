function sort(array) {
    if(array.length < 2 || !array.length) return array
    
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = 0; j < array.length - 1 - i; j++) {
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    
    return array
}

console.log(sort([8,2,3,6,5,4,2]))
console.log(sort([-10, 1, 3, 8, -13, 32, 9, 5]))
console.log(sort([2,1]))
console.log(sort([3, 1, 2, 4]))

// TC: O(n2)
// SC: O(1)