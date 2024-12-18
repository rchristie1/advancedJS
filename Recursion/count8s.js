/*
'''
❓ PROMPT
Given a non-negative int n, compute recursively (no loops) the number of occurrences 
of 8 as a digit, except that an 8 with another 8 immediately to its left counts double, 
so 8818 yields 4 (because 1+2+0+1).

Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while dividing (/) 
by 10 removes the rightmost digit (126 / 10 is 12).

Example(s)
count8(8) == 1
count8(818) == 2
count8(8818) == 4  (because 1+2+0+1)
 
*/

function count8(n) {
    let count = 0;
    let lastValue = null

    function helper(val) {
        if(val.length === 0) {
            return;
        }

        if(val[0] == 8) {
            if (lastValue == 8) {
                count++
            }
            count++
        }

        lastValue = val.shift()
        helper(val)
    }

    let v = n.toString().split('')
    helper(v)
    

    return count;
}

console.log(count8(8) == 1)
console.log(count8(818) == 2)
console.log(count8(8818) == 4)

console.log(count8(8) == 1)
console.log(count8(818) == 2)
console.log(count8(8818) == 4)
console.log(count8(8088) == 4)
console.log(count8(123) == 0)
console.log(count8(81238) == 2)
console.log(count8(88788) == 6)
console.log(count8(8234) == 1)
console.log(count8(2348) == 1)
console.log(count8(23884) == 3)
console.log(count8(0) == 0)
console.log(count8(1818188) == 5)
console.log(count8(8818181) == 5)
console.log(count8(1080) == 1)
console.log(count8(188) == 3)
console.log(count8(88888) == 9)
console.log(count8(9898) == 2)
console.log(count8(78) == 1)