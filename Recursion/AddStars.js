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
 

📆 PLAN
Outline of algorithm #: 
 

🛠️ IMPLEMENT
function addStars(word) {
def addStars(word: str) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// function addStars(word) {
//     if(!word || word.length <= 1) return word

//     return word[0] + '*' + addStars(word.substring(1))
// }

// with index
function addStars(word, index = 0) {
    if(word.length === 0) return word

    if (index >= word.length - 1){
        return word[index]
    } else {
        return word[index] + '*' + addStars(word, index+1)
    }

}

console.log(addStars("hello") == "h*e*l*l*o")
console.log(addStars("abc") == "a*b*c")
console.log(addStars("ab") == "a*b")
console.log(addStars("a") == "a")
console.log(addStars("") == "")
console.log(addStars("3.14") == "3*.*1*4")
console.log(addStars("Chocolate") == "C*h*o*c*o*l*a*t*e")
console.log(addStars("1234") == "1*2*3*4")