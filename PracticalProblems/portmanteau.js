/*
'''
❓ PROMPT
Given three distinct words, determine if the third word is potentially a portmanteau of the first two.

A portmanteau (https://en.wikipedia.org/wiki/Portmanteau) is a word that is made by taking the start 
of one word and the end of another and mashing them together. Brunch is a great example, combining the 
first 2 letters of "breakfast" with the last 4 of "lunch".

Compound words aren't considered portmanteaus, so "football" is not a portmanteau of "foot" and "ball". 
At least one of the two words needs to be truncated.

Example(s)
isPortmanteau("smoke", "fog", "smog") == True (sm + og)
isPortmanteau("snake", "fog", "smog") == False
isPortmanteau("lunch", "breakfast", "brunch") == True (br + unch)
isPortmanteau("shrink", "inflation", "shrinkflation") == True (shrink + flation)
isPortmanteau("foot", "ball", "football") == False
 

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
function isPortmanteau(word1, word2, proposed) {
def isPortmanteau(word1: str, word2: str, proposed: str) -> bool:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function isPortmanteau(word1, word2, proposed) {
    if (word1 + word2 === proposed) return false
    if (word2 + word1 === proposed) return false

    // step through each word and compare up until the strings match or it's impossible to match

    const pLength = proposed.length
    const combinedWords = word1+word2
    const combinedWordsReversed = word2+word1

    let start = 0
    let end = combinedWords.length - 1
    let proposedEnd = proposed.length - 1

    let output = ''
    let outputReversed = ''

    while (output.length < pLength) {
        if(combinedWords[start] == proposed[start]) {
            start++
        }
        if(combinedWordsReversed[start] == proposed[start]) {
            start++
        }
        
        if(combinedWords[end] == proposed[proposedEnd]) {
            end--
            proposedEnd--
        }
        if(combinedWordsReversed[end] == proposed[proposedEnd]) {
            end--
            proposedEnd--
        }
        
        output = combinedWords.slice(0, start) + combinedWords.slice(end, combinedWords.length)
        outputReversed = combinedWordsReversed.slice(0, start) + combinedWordsReversed.slice(end, combinedWordsReversed.length)

        if(output.length === pLength || outputReversed.length === pLength) {
            if (output === proposed || outputReversed === proposed) {
                return true
            } else {
                return false;
            }
        }

        if((combinedWords[start] != proposed[start] && combinedWords[end] != proposed[end]) && 
        (combinedWordsReversed[start] != proposed[start] && combinedWordsReversed[end] != proposed[end])
        ) {
            if(output != proposed && outputReversed != proposed) return false
        }
    }

    return true
}

// function isPortmanteau(word1, word2, proposed) {
//     function check(w1, w2) {
//       let p1 = 0
//       for (; p1 < w1.length && p1 < proposed.length && proposed[p1] === w1[p1]; p1++) {}
//       p1-- // the loop iterated 1 too far
  
//       let p2 = proposed.length - 1
//       for (let s2 = w2.length - 1; s2 >= 0 && proposed[p2] === w2[s2]; s2--, p2--) {}
  
//       return p1 >= p2 && p2 < proposed.length - 1
//     }
  
//     // Rule out compounds
//     if (proposed === word1 + word2) return false
//     if (proposed === word2 + word1) return false
  
//     // The portmanteau can't exactly match either source word
//     if (proposed === word1 || proposed === word2) return false
  
//     return check(word1, word2) || check(word2, word1)
//   }

console.log(isPortmanteau("fog", "smoke", "smog") == true)
console.log(isPortmanteau("smoke", "fog", "smog") == true)
console.log(isPortmanteau("motor", "hotel", "motel") == true)
console.log(isPortmanteau("branch", "much", "brunch") == false)
console.log(isPortmanteau("shrink", "inflation", "shrinkflation") == true)
console.log(isPortmanteau("skimp", "inflation", "skimpflation") == true)
console.log(isPortmanteau("miserable", "flimsy", "mimsy") == true)
console.log(isPortmanteau("puppies", "cat", "puppi") == false)
console.log(isPortmanteau("cat", "dog", "otter") == false)
console.log(isPortmanteau("ten", "at", "tent") == true)
console.log(isPortmanteau("at", "ten", "tent") == true)
 