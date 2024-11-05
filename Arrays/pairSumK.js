/*
'''
❓ PROMPT
Now we're going to apply two different patterns to the same problem and see how the code looks and how it affects the runtime.

The task is to determine if an array contains a pair that adds up to a value, k. The array is sorted ahead of time.

Just like many problems in computer science and software engineering, there are multiple ways to solve the problem, but they often have different time or space complexity, or there are other tradeoffs.

Learning to recognize these decision points is an important step in becoming a strong software engineer.

Patterns and Tools:
https://drive.google.com/file/d/1jtM5hx73hgq9b6JYMdwCparflrsJBa9T/view

Example(s)
[1, 5, 8, 10, 13, 18], k = 15 => true
 

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
function sumToK(array, k) {
def sumToK(array, k):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function sumToK(array, k) {
    if(!array.length) return false
    
    let output = false
    for(let i = 0; i < array.length - 1; i++) {
        for(let j = i+1; j < array.length; j++) {
            if(array[i]+ array[j] === k) {
                output = true;
                break
            }
        }

    }

    return output
}

console.log(sumToK([1,5,8,10,13,18], 15) === true)
console.log(sumToK([1,5,8,10,13,18], 12) === false)
console.log(sumToK([5], 5) === false)
console.log(sumToK([4], 5) === false)
console.log(sumToK([], 15) === false)
console.log(sumToK([2,2,5,8], 4) === true)
console.log(sumToK([2,4], 5) === false)
console.log(sumToK([2,4], 6) === true)
console.log(sumToK([4,4], 7) === false)
console.log(sumToK([4,4], 8) === true)
console.log(sumToK([4,4,4,4], 8) === true)