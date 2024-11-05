/*
'''
❓ PROMPT
Given an array, write 2 recursive functions to find the index of the minimum and maximum element in an array. If there's a tie-breaker, return the first occurrence (lowest index).

Example(s)
findMinIndex([12, 1234, 45, 67, 1]) == 4
findMinIndex([10, 20, 30]) == 0
findMinIndex([8, 6, 7, 5, 3, 7]) == 4

findMaxIndex([12, 1234, 45, 67, 1]) == 1
findMaxIndex([10, 20, 30]) == 2
findMaxIndex([8, 6, 7, 5, 3, 7]) == 0
 

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
function findMinIndex(array) {
function findMaxIndex(array) {
def findMinIndex(array: list[int]) -> int:
def findMaxIndex(array: list[int]) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function findMinIndex(array, l = 0, r = array.length - 1) {
    if(!array.length) return []

    if (l === r) return l

    if(array[l] <= array[r]) {
        r--
    } else {
        l++
    }

    return findMinIndex(array, l, r)
}

console.log('Min Index');
console.log(findMinIndex([12, 1234, 45, 67, 1]) == 4)
console.log(findMinIndex([10, 20, 30]) == 0)
console.log(findMinIndex([30, 20, 10]) == 2)
console.log(findMinIndex([20, 10, 30]) == 1)
console.log(findMinIndex([10, 20, 30, 10]) == 0)
console.log(findMinIndex([10, 10, 10, 10]) == 0)
console.log(findMinIndex([11]) == 0)
console.log(findMinIndex([8, 6, 7, 5, 3, 7]) == 4)
console.log(findMinIndex([-10, -5, -3, -30]) == 3)
console.log(findMinIndex([15, 11]) == 1)
console.log(findMinIndex([15, 11, 12, 13, 14]) == 1)
console.log(findMinIndex([15, 17, 16, 12, 13, 14]) == 3)

function findMaxIndex(array, l = 0, r = array.length - 1) {
    if(!array.length) return []

    if (l === r) return r

    if(array[l] >= array[r]) {
        r--
    } else {
        l++
    }

    return findMaxIndex(array, l, r)
}


console.log('\nMax Index');
console.log(findMaxIndex([12, 1234, 45, 67, 1]) == 1)
console.log(findMaxIndex([10, 20, 30]) == 2)
console.log(findMaxIndex([30, 20, 10]) == 0)
console.log(findMaxIndex([20, 10, 30]) == 2)
console.log(findMaxIndex([10, 20, 30, 10]) == 2)
console.log(findMaxIndex([10, 10, 10, 10]) == 0)
console.log(findMaxIndex([11]) == 0)
console.log(findMaxIndex([8, 6, 7, 5, 3, 7]) == 0)
console.log(findMaxIndex([-10, -5, -3, -30]) == 2)
console.log(findMaxIndex([15, 11]) == 0)
console.log(findMaxIndex([15, 11, 12, 13, 14]) == 0)
console.log(findMaxIndex([15, 17, 16, 12, 13, 14]) == 1)