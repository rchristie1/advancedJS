/*
'''
❓ PROMPT
You're working on a finance application and need to format monetary amounts in the following manner for accounting purposes.
Every number must adhere to a strict set of rules:

1. All amounts are rounded to two decimal places, even if it is .00.
2. A $ precedes the first digit.
3. Thousands, millions, billions, etc have commas between every 3 digits from the left of the decimal.
4. Negative numbers are surrounded by parentheses.
5. If the absolute amount is less than 1, there should still be a zero before the '.'

Write a function that takes a numeric value and outputs the "finance formatted" string representation.

This is a very realistic data processing problem with lots of special cases!

Example(s)
moneyFormat(1) == "$1.00"
moneyFormat(-1) == "($1.00)"
moneyFormat(16) == "$16.00"
moneyFormat(123) == "$123.00"
 

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
function moneyFormat(amount) {
def moneyFormat(amount: float) -> str:
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function moneyFormat(amount) {
    let isNegative = false;
    if(amount < 0) isNegative = true
    if(amount === 0) return '$0.00'

    amount = amount.toString().split('')
    let numLength = amount.length
    
    if (amount[numLength - 3] !== '.') {
        // add the decimal if it doesnt exist
        amount.push('.')
        amount.push('0')
        amount.push('0')

        //could also just do 
        // amount.toFixed(2);
    }

    
    // start after the decimal
    let commaArr = []
    let commaTracker = 7;
    
    let i = amount.length
    
    while(i >= 0) {
        if (commaTracker === 0){
            commaArr.push(',')
            commaTracker = 3
        } else {
            commaArr.push(amount[i])
            commaTracker--
            i--
        }
    }

    const output = commaArr.reverse().join('')


    console.log(isNegative ? `($${output})` : `$${output}`)
    return isNegative ? `($${output})` : `$${output}`

    
}

console.log(moneyFormat(1) == "$1.00")
console.log(moneyFormat(-1) == "($1.00)")
console.log(moneyFormat(16) == "$16.00")
console.log(moneyFormat(123) == "$123.00")