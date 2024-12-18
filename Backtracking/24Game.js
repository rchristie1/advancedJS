/**

24 Game
Hard
Topics
Companies
You are given an integer array cards of length 4. You have four cards, each containing
a number in the range [1, 9]. You should arrange the numbers on these cards in a 
mathematical expression using the operators ['+', '-', '*', '/'] and the parentheses
'(' and ')' to get the value 24.

You are restricted with the following rules:

The division operator '/' represents real division, not integer division.
For example, 4 / (1 - 2 / 3) = 4 / (1 / 3) = 12.
Every operation done is between two numbers. In particular, we cannot use '-' as a unary operator.
For example, if cards = [1, 1, 1, 1], the expression "-1 - 1 - 1 - 1" is not allowed.
You cannot concatenate numbers together
For example, if cards = [1, 2, 1, 2], the expression "12 + 12" is not valid.
Return true if you can get such expression that evaluates to 24, and false otherwise.

 

Example 1:

Input: cards = [4,1,8,7]
Output: true
Explanation: (8-4) * (7-1) = 24
Example 2:

Input: cards = [1,2,1,2]
Output: false
 

Constraints:

cards.length == 4
1 <= cards[i] <= 9

*/
const isValid = (value) => Math.abs(value - 24) < 0.0000001;

var judgePoint24 = function(cards) {
    function calculate(hand) {
        // base case. There is only one card left - see if it evaluates top ~24
        if(hand.length === 1) {
            return isValid(hand)
        }

        let valid = false

        // max length of the hands array is 4 cards
        // but through recursion we shorten the length of the hands to 3 then 2 then 1
        for (let i = 0; i < hand.length; i++) {
            for (let j = i + 1; j < hand.length; j++) {
                let firstCard = hand[i]
                let secondCard = hand[j]

                // save the rest of the hand so we can evaluate the remaining cards next
                // you will never have more than 2 extra cards
                const nextCards = hand.filter((x, idx) => idx !== i && idx !== j)

                // now try all the different ways of combining the two cards
                // you selected, along with any remaining cards
                valid = 
                    valid ||
                        calculate([...nextCards, firstCard + secondCard]) ||
                        calculate([...nextCards, firstCard - secondCard]) ||
                        calculate([...nextCards, secondCard - firstCard]) ||
                        calculate([...nextCards, firstCard * secondCard]) ||
                        calculate([...nextCards, firstCard / secondCard]) ||
                        calculate([...nextCards, secondCard / firstCard])
            }
            return valid
        }
    }

    /** Starting out with the cards given. As the algorithm progreses,
     * we'll pass different card sets into deeper recursive calls. Some
     * of these cards will be the originals, but some will be 'virtual'
     * cards that represent the results of combining other cards
     */
    return calculate(cards)
};

const deck1 = [4,1,8,7]
const deck2 = [1,2,1,2]

console.log(judgePoint24(deck1)); // true
console.log(judgePoint24(deck2)); // false

