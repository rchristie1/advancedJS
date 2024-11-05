/*
'''
❓ PROMPT
Given an array and a target count X, return the number of elements that is repeated exactly X times.

Example(s)
[1, 2, 3, 1, 2, 3], 2 == 3
[1, 2, 3, 1, 2, 3], 3 == 0
[1, 3, 3, 5, 5, 5, 5, 5, 3], 3 == 1
 

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
function countExactOccurrences(arr, exactOccurrences) {
def countExactOccurrences(arr: list[int], exactOccurrences: int) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function countExactOccurrences(arr, exactOccurrences) {
    let count = 0;

    let map1 = new Map()

    for(a of arr) {
        if(map1.has(a)) {
            let prevValue = map1.get(a)

            map1.set(a, prevValue + 1)
            if(map1.get(a) === exactOccurrences) {
                count++
            } else if(map1.get(a) > exactOccurrences && prevValue === exactOccurrences) {
                count--
            }
        } else {
            map1.set(a, 1)
            if (exactOccurrences === 1) {
                count++
            }
        }
    }

    return count
}
let arr = [1, 2, 3, 1, 2, 3]
console.log(countExactOccurrences(arr, 2) === 3)
console.log(countExactOccurrences(arr, 3) === 0)

arr = [1, 3, 3, 5, 5, 5, 5, 5, 3]
console.log(countExactOccurrences(arr, 1) === 1)
console.log(countExactOccurrences(arr, 3) === 1)
console.log(countExactOccurrences(arr, 5) === 1)

arr = [10,10,10,10]
console.log(countExactOccurrences(arr, 1) === 0)
console.log(countExactOccurrences(arr, 3) === 0)
console.log(countExactOccurrences(arr, 4) === 1)
console.log(countExactOccurrences(arr, 6) === 0)

arr = [100]
console.log(countExactOccurrences(arr, 1) === 1)
console.log(countExactOccurrences(arr, 5) === 0)
console.log(countExactOccurrences(arr, 100) === 0)

// SC: O(N)
// TC: O(N)