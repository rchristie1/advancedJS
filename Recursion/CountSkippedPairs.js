/*
'''
❓ PROMPT
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. 
So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. 
Compute the number of skipped pairs in the given string using Recursion (no loops).

Example(s)
countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1
 

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
function countSkippedPairs(word) {
def countSkippedPairs(word: str) -> int:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function countSkippedPairs(word) {
    if(!word || word.length < 3) return 0

    // if((word[0] !== word[1]) && (word[0] === word[2])) { this was my original solution but was misled by the term "Skipped pairs"
    if((word[0] === word[2])) {
        return 1 + countSkippedPairs(word.substring(1))
    }

    return countSkippedPairs(word.substring(1))
}

console.log(countSkippedPairs("axa") == 1)
console.log(countSkippedPairs("axax") == 2)
console.log(countSkippedPairs("axbx") == 1)
console.log(countSkippedPairs("hi") == 0)
console.log(countSkippedPairs("hihih") == 3)
console.log(countSkippedPairs("ihihhh") == 3)
console.log(countSkippedPairs("ihjxhh") == 0)
console.log(countSkippedPairs("") == 0)
console.log(countSkippedPairs("a") == 0)
console.log(countSkippedPairs("aa") == 0)
console.log(countSkippedPairs("aaa") == 1)
console.log(countSkippedPairs("aaaaaaaa") == 6)