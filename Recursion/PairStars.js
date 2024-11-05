/*
'''
❓ PROMPT
Given a string, recursively compute a new string where identical chars that are adjacent in the original string are separated from each other by a "*".

Example(s)
pairStars("hello") == "hel*lo"
pairStars("xxyy") == "x*xy*y"
pairStars("aaaa") == "a*a*a*a"
 

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
function pairStars(word) {
def pairStars(word: str) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

// function pairStars(word) {
//     if(!word || word.length < 2) return word

//     if(word[0] === word[1]) {
//         return word[0] + '*' + pairStars(word.substring(1))
//     } else {
//         return pairStars(word.substring(1))
//     }
// }

function pairStars(word, i = 0) {
    if(!word) return word
    if(i >= word.length - 1) return word[i]

    if(word[i] === word[i+1]) {
        return word[i] + '*' + pairStars(word, i + 1)
    } else {
        return word[i] + pairStars(word, i + 1)
    }
}



console.log(pairStars("hello") === "hel*lo")
console.log(pairStars("hello"))
console.log(pairStars("xxyy") === "x*xy*y")
console.log(pairStars("xxyy"))
console.log(pairStars("aaaa") === "a*a*a*a")
console.log(pairStars("aaab") === "a*a*ab")
console.log(pairStars("aa") === "a*a")
console.log(pairStars("a") === "a")
console.log(pairStars("") === "")
console.log(pairStars("noadjacent") === "noadjacent")
console.log(pairStars("abba") === "ab*ba")
console.log(pairStars("abbba") === "ab*b*ba")