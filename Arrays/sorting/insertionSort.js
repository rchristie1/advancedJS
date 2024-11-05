function sort(nums) {
    for(let i = 1; i < nums.length; i++) {
        let current = nums[i]
        let j = i-1 // start from the previous item

        while(j >= 0 && nums[j] > current) {
            //shift item to the right
            nums[j+1] = nums[j]
            j--
        }
        //next store the current item at idx j+1
        nums[j+1] = current
    }

    return nums
}

console.log(sort([8,2,3,6,5,4,2]))

// TC: O(n2)
// SC: O(1)