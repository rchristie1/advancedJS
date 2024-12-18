/*
'''
❓ PROMPT
Given a string that contains exactly 1 pair of parentheses, compute recursively a
new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

Example(s)
parenBit("xyz(abc)123") == "(abc)"
parenBit("x(hello)") == "(hello)"
parenBit("(xy)1") == "(xy)"
 
 

📆 PLAN
Outline of algorithm #: 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function parenBit(word) {
    let output = ''

    function helper(l, r) {
        if (word[l] === '(' && word[r] === ')') {
            output = word.substring(l, r + 1);
            return
        }

        helper(
            word[l] !== '(' ? l + 1 : l,
            word[r] !== ')' ? r - 1 : r
        )
    }

    helper(0, word.length - 1)
    console.log(output);


    return output;
}

console.log(parenBit("xyz(abc)123") == "(abc)")