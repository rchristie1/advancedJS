/*
'''
❓ PROMPT
Given a target integer *X*, iterate from 1 to *X* and return a matrix sequence where each array starts with 1 and goes up to the current iteration. Each iteration should increment the array size and values until it reaches *X*.

[
[1],
[1, 2], 
[1, 2, 3],
[1, 2, 3, 4],
[1, 2, 3, 4, 5],
...
...
...
[1, 2, 3, ..., X]
]

Example(s)
generateSequence(2) == [[1], [1,2]]
generateSequence(3) == [[1], [1,2], [1,2,3]]
 

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
function generateSequence(target) {
def generateSequence(target: int) -> list[list[int]]:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function generateSequence(target) {
    if (target === 0) return []

    const output = []
    let count = 1

    while (target > 0) {
        const grp = []
        
        for(let i = 1; i <= count; i++) {
            grp.push(i)
        }

        output.push(grp)
        target--
        count++
    }


    return output;
}

console.log(JSON.stringify(generateSequence(0)) == "[[]]"
  || JSON.stringify(generateSequence(0)) == "[]")
console.log(JSON.stringify(generateSequence(1)) == "[[1]]")
console.log(JSON.stringify(generateSequence(2)) == "[[1],[1,2]]")
console.log(JSON.stringify(generateSequence(3)) == "[[1],[1,2],[1,2,3]]")
console.log(JSON.stringify(generateSequence(4)) == "[[1],[1,2],[1,2,3],[1,2,3,4]]")


function ii (a,b) {

    if(a===b) return 5

    let c = ii(a+1, b-1) + a + b
    console.log(c);

    return c
    
}


ii(3,9)