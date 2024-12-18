/*
'''
❓ PROMPT
Given a string, insert a star (*) between each character using a recursive method.

Example(s)
addStars("hello") == "h*e*l*l*o"
addStars("abc") == "a*b*c"
addStars("ab") == "a*b"
 

🔎 EXPLORE
List your assumptions & discoveries:
 

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/


function addStars(word) {
    if(word.length < 2) return word

    return word[0] + '*' + addStars(word.substring(1))
}

console.log(addStars('ryan'))