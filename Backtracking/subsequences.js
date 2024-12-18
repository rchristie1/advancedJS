/*
'''
❓ PROMPT
Define a subsequence of a string "s" to be a list of characters from "s" such that the characters appear in the same order in the list and in "s".

For instance, for the string "abcd", "a", "ab", and "acd" are valid subsequences, whereas "db" is not, since "b" comes before "d" in the original string.

Given an input string, return all subsequences except the empty string.

Example(s)
getAllSubsequences("abc") ==
  ["a", "b", "c", "ab", "ac", "bc", "abc"]
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()
 
*/

function getAllSubsequences(word) {
    const output = []
    const stack = []

    function backtrack(i) {
        if (i === word.length) {            
            if (stack.length > 0) {
                output.push(stack.join(''))
            }
            return;
        }

        backtrack(i + 1)
        
        stack.push(word[i])
        backtrack(i + 1)
        stack.pop()
    }

    backtrack(0)
    
    return output;
}

const answer = ["a", "b", "c", "ab", "ac", "bc", "abc"]
console.log(getAllSubsequences("abc"))


// sort the results to make them order-agnostic
console.log(JSON.stringify(getAllSubsequences("")) === '[]')
console.log(JSON.stringify(getAllSubsequences("a")) === '["a"]')
console.log(JSON.stringify(getAllSubsequences("ab").sort()) === '["a","ab","b"]')
console.log(JSON.stringify(getAllSubsequences("abc").sort()) ===
    '["a","ab","abc","ac","b","bc","c"]')
console.log(JSON.stringify(getAllSubsequences("abcd").sort()) ===
    '["a","ab","abc","abcd","abd","ac","acd","ad","b","bc","bcd","bd","c","cd","d"]')
console.log(JSON.stringify(getAllSubsequences("1A").sort()) ===
    '["1","1A","A"]')
console.log(JSON.stringify(getAllSubsequences("1A2b").sort()) ===
    '["1","12","12b","1A","1A2","1A2b","1Ab","1b","2","2b","A","A2","A2b","Ab","b"]')
console.log(getAllSubsequences("jesitony").length === 255)