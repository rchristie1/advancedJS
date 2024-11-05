/*
'''
❓ PROMPT
Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made
of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

Example(s)
parenBit("xyz(abc)123") == "(abc)"
parenBit("x(hello)") == "(hello)"
parenBit("(xy)1") == "(xy)"
 

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
function parenBit(word) {
def parenBit(word: str) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// my implementation however, using slicing. Not recommended because it blows up the time and space complexity.

function parenBit(word, output = '') {
    if (!word) return output

    if((word[0] === '(' || output.length > 0) && output[output.length - 1] !== ')') {
        output += word[0]
        return parenBit(word.substring(1), output)
    } 
    
    return parenBit(word.substring(1), output)
}

// here is the Formation solution
// basically a 2 pointer approach where we increment l and decrement r
// until we find the value we're looking for
function helper(word, l, r) {
    if(word[l] === '(' && word[r] === ')') {
        return word.slice(l, r+1)
    } else {
        l = word[l] === '(' ? l : l + 1
        r = word[r] === ')' ? r : r - 1

        return helper(word, l, r)
    }
}
function parenBit2(word) {
    
    return helper(word, 0, word.length - 1)
}


console.log(parenBit("xyz(abc)123") === "(abc)")
console.log(parenBit("x(hello)") === "(hello)")
console.log(parenBit("(xy)1") === "(xy)")
console.log(parenBit("not really (possible)") === "(possible)")
console.log(parenBit("(abc)") === "(abc)")
console.log(parenBit("(abc)xyz") === "(abc)")
console.log(parenBit("(abc)x") === "(abc)")
console.log(parenBit("(x)") === "(x)")
console.log(parenBit("()") === "()")
console.log(parenBit("res (ipsa) loquitor") === "(ipsa)")
console.log(parenBit("hello(not really)there") === "(not really)")
console.log(parenBit("ab(ab)ab") === "(ab)")