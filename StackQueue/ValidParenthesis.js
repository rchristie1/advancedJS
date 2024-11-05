/*
'''
❓ PROMPT
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
* Open brackets must be closed by the same type of brackets.
* Open brackets must be closed in the correct order.

Example(s)
Valid inputs: "()", ""()[]{}", "([])"
Invalid inputs: "(]", "([)]"
 

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
function isValid(s)
def is_valid(s):
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function isValid (str) {
    const tmp = []

    for (s of str) {
        if(s === '(' || s === '[' || s === '{') {
            tmp.push(s)
        } else {
            const last = tmp[tmp.length - 1]
            if(s === ')' && last === '(' || s === '}' && last === '{' || s === ']' && last === '[') {
                tmp.pop()
            } else {
                return false
            }
        }
    }

    return tmp.length === 0
}

console.log(isValid("()()()") === true);  
console.log(isValid("[(])") === false);  
console.log(isValid("") === true);  
console.log(isValid("()") === true);  
console.log(isValid("()[]{}") === true);  
console.log(isValid("{[()]}") === true);
console.log(isValid("(]") === false);  
console.log(isValid("([)]") === false);  
console.log(isValid("{[()()]}") === true);  
console.log(isValid("({[)") === false);  
console.log(isValid("))))") === false);  
console.log(isValid("(({{[") === false);  
console.log(isValid("") === true);  
console.log(isValid("[{()}]") === true);  
console.log(isValid("]") === false);