function fibSeq(val) {
    if (!val) return 0
    if (val === 1 || val === 2) return 1
    
    const nums = [0, 1 , 1]

    val = val - 3

    while(val > 0) {
        let len = nums.length
        const newVal = nums[len - 2] + nums[len - 1]
        nums.push(newVal)
        val--  
    }

    return nums[nums.length - 1]
}

console.log(fibSeq(9))