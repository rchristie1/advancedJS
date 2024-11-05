function sort (arr) {
    if(!arr.length || arr.length < 2) return arr
    for (let i = 0; i < arr.length; i++) {
        let tmpMin = i

        for (let j = i+1; j < arr.length; j++) {
            if(arr[tmpMin] > arr[j]) {
                tmpMin = j
            }
        }

        if(tmpMin !== i) {
            [arr[tmpMin], arr[i]] = [arr[i], arr[tmpMin]] 
        }
    }
    return arr
}

console.log(sort([8,2,3,6,5,4,2]))
console.log(sort([-10, 1, 3, 8, -13, 32, 9, 5]))
console.log(sort([3, 1, 2, 4]))