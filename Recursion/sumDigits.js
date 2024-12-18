/*
'''
❓ PROMPT
Given a non-negative int n, return the sum of its digits recursively (no loops).
Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while divide (/) by 10 
removes the rightmost digit (126 / 10 is 12, or 12.6 depending on your language). 
In addition, in Python, the integer division operator (//) will round down the result (126 // 10 is 12).

Example(s)
sumDigits(12) == 3
sumDigits(49) == 13
sumDigits(126) == 9
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function sumDigits(n) {
def sumDigits(n: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function sumDigits(n) {
    if(!n) return 0

    let sum = 0;

    function helper(val) {
        if(val.length === 0) return

        sum += Number(val.pop())

        helper(val)
    }

    helper(n.toString().split(''))
    
    return sum
}

console.log(sumDigits(126) == 9)
console.log(sumDigits(49) == 13)
console.log(sumDigits(12) == 3)
console.log(sumDigits(10) == 1)
console.log(sumDigits(1) == 1)
console.log(sumDigits(0) == 0)
console.log(sumDigits(730) == 10)
console.log(sumDigits(1111) == 4)
console.log(sumDigits(11111) == 5)
console.log(sumDigits(10110) == 3)
console.log(sumDigits(235) == 10)