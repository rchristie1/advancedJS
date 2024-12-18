/**
You're a coder - you know how important it is to have a closing parenthesis 
for every opening parenthesis! Given n pairs of parentheses, write a function 
that generates all of the possible combinations of regular parentheses, sorted in lexicographical order.

The ordering requirement means that a sequence like "(())" will come before "()()".
The both start with the same character but looking at the second character, ( is before ).
 */

var generateParenthesis = function (n) {
    const result = []

    function backtrack(curr, open, closed) {
        // will only meet this condition if n doubles and valid parens
        // valid parens handled by logic on ln 25
        if (curr.length === n * 2) {
            result.push(curr)
            return
        }

        if (open < n) {
            backtrack(curr + '(', open + 1, closed)
        }

        if (closed < open) {
            backtrack(curr + ')', open, closed + 1)
        }        
    }

    backtrack('', 0, 0)

    return result
};

console.log(generateParenthesis(4))

/**
4 = [
  '(((())))', '((()()))',
  '((())())', '((()))()',
  '(()(()))', '(()()())',
  '(()())()', '(())(())',
  '(())()()', '()((()))',
  '()(()())', '()(())()',
  '()()(())', '()()()()'
]
*/