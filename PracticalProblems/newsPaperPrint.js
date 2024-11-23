/*
'''
Given an array of words and a fixed line length maxWidth, format the text so that each line is exactly maxWidth characters and fully justified (left and right aligned). 

Requirements:
- Pack as many words as possible in each line.
- Distribute extra spaces between words as evenly as possible. If the spaces don't divide evenly, place the extra spaces in the leftmost gaps.
- If a line contains only one word, left-align it and pad the rest of the line with spaces to reach maxWidth.
- For the last line, words should be left-aligned, with no extra spaces between words. Pad the end with spaces to make the line maxWidth long.
 

EXAMPLE(S)
["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16

returns
["the  quick brown", // (2 spaces, 1 space)
"fox  jumps  over", // (2 spaces, 2 spaces)
"the lazy dog    "]  // (left justify, fill the end with 4 spaces)

["the  quick brown"]
["the", "quick", "brown"]
["fox jumps over"]
["the lazy dog"]
 
 k = 17
 ["foo", "bar", "baz", "bin" ]

FUNCTION SIGNATURE
function justify(words, maxWidth) {
def fullJustify(words: list[str], maxWidth: int) -> list[str]:
'''
*/

function justify(words, maxWidth) {
    let lines = []
    let tmpStorage  = []

    // split the input into individual lines
    for(const word of words) {
        if(!tmpStorage.length) {
            tmpStorage.push(word)
        } else if (tmpStorage.length < maxWidth) {
            const newSize = tmpStorage.join('').length + word.length

            // will have to add a space after each character except the last one
            // so account for that in the condition
            if ((newSize + tmpStorage.length - 1) < maxWidth) {
                tmpStorage.push(word)
            } else {
                lines.push(tmpStorage)
                tmpStorage = []
                tmpStorage.push(word)
            }
        }
    }

    // push any remaining elements to the lines array
    if(tmpStorage.length) lines.push(tmpStorage)

    for (let i = 0; i < lines.length; i++) {
        // calculate spaces required
        const requiredSpaces = maxWidth - lines[i].join('').length

        // keeps track of word in the loop
        let w = 0;
        
        // iterate over every word in the line and add a space
        for (let j = 0; j < requiredSpaces; j++) {
            // when the final line is reached the last line should only add one space per word
            // all remaining spaces should go after the last word
            if(i === lines.length - 1) {
                if (w != lines[i].length - 1) {
                    lines[i][w] += ' '
                    w++
                } else {
                    lines[i][w] += ' '
                }

                
            } else {
                // this ensures that spaces are not added to the last word
                if(w >= lines[i].length - 1) {
                    w = 0
                }
                
                lines[i][w] += ' '
                w++
            }

            
        }
    }

    console.log(lines);
    return lines
}

justify(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16)