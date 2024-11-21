// Map of numbers 0 - 9
const singleDigitMap = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
}

// Map of numbers 10 - 19
const doubleDigitMap = {
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
}

// map of all tens 10 - 90 
const tenXMap = {
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety',
}

// used to verify 2 and 3 digit numbers dont begin with a 0 ex 02, 009 etc.
function clearLeadingZeros(num) {
    const originalNumber = num; // keep the original number
    num = num.join('').toString(); // convert the array of numbers to a string

    num = +num // remove any leading 0's by converting it to a number
    num = num.toString() // convert it back to a string 

    // do another check on the length
    if(num.length == 1) return calculateSingleDigits(num)

    // this condition prevents an infinitie loop by continuosly calling calculateDoubleDigits
    if(num.length == 2 && originalNumber.length > 2) return calculateDoubleDigits(num.split(''))
    
    return null // otherwise return null
}

function calculateSingleDigits(num) {
    return singleDigitMap[num]
}

function calculateDoubleDigits(num) {
    let numAfterClearingZeros = clearLeadingZeros(num) // check for leading 0's
    if(numAfterClearingZeros) return numAfterClearingZeros // if we get a value exit the function early
    
    num = num.join('').toString()

    if (num.length === 2 && num < 20) return doubleDigitMap[num] // less than 20 can be looked up in the dictionary

    // double digits above 20 need to be looked up in separate dictionaries
    if (num.length === 2 && num >= 20) {
        let output = ''
        for (let i = 0; i < num.length; i++) {
            if (i == 0) { // first number lookup
                output += tenXMap[num[i]]
            } else if (num[i] != 0) { // second lookup
                output += ' ' + calculateSingleDigits([num[i]])
            }
        }
        return output
    }
}

function calculateHundreds(num) {
    output = ''

    let numAfterClearingZeros = clearLeadingZeros(num) // check for leading 0's
    if(numAfterClearingZeros) return numAfterClearingZeros

    for (let i = 0; i < num.length; i++) {
        if (i == 0) {
            output += calculateSingleDigits(num[i]) + ' ' + 'Hundred'
        }
        else {
             // if the last 2 numbers are 0's exit early ex. 2->00 two hundred
            if (num[num.length - 1] == 0 && num[1] == 0) return output
            
            return output + ' ' + calculateDoubleDigits(num.slice(1, num.length))
        }
    }
}

function calculateBeyondHundreds(num, output) {
    const len = num.length
    // placeValue will be set when the len of the number is realized ie Million, Thousand etc
    let placeValue = '' 

    // subtractValue is used to determine how many places (0's) should come after
    let subtractValue = 0 

    if (len <= 6) {
        placeValue = 'Thousand'
        subtractValue = 3
    } else if(len <= 9) {
        placeValue = 'Million'
        subtractValue = 6
    } else {
        placeValue = 'Trillion'
        subtractValue = 9
    }

    // This slice returns the reminaining number(s) 
    // ex. 10,000 placeValue='Thousand', subtractValue=3, values=[1,0] 
    const values = num.slice(0, len - subtractValue)

    // works it's way from the front of the array converting chunks of values to text
    if (values.length === 1) {
        output += calculateSingleDigits(values) + ' ' + placeValue + ' '
    } else if (values.length === 2) {
        output += calculateDoubleDigits(values) + ' ' + placeValue + ' '
    } else {
        output += calculateHundreds(values) + ' ' + placeValue + ' '
    }

    // store the remaining numbers 
    // ex. 10,123 len=5, subtractValue=3, return values from idx 2 till the end, rest=[1,2,3] 
    const rest = num.slice(len - subtractValue, len)

    if (rest.every((val) => val == 0)) {
        // if the reminaing numbers are all 0's exit early because
        // the number has been converted
        return output
    } else {
        // if the number is still greater than 1 million, start recursion
        if(rest.length >= 6) {
            return calculateBeyondHundreds(rest, output)
        } else  {
            return output += calculateHundreds(rest)
        }
    }
}

function solution(num) {
    num = num.toString().split('')
    const len = num.length

    if (len === 1) return calculateSingleDigits(num)
    if (len === 2) return calculateDoubleDigits(num)
    if (len === 3) return calculateHundreds(num)
    if (len > 3) return calculateBeyondHundreds(num, '')
}


console.log(solution(1))
console.log(solution(20))
console.log(solution(21))
console.log(solution(101))
console.log(solution(150))
console.log(solution(999))
console.log(solution(9999))
console.log(solution(1000))
console.log(solution(10000))
console.log(solution(100000))
console.log(solution(1200000))
console.log(solution(1200001))
console.log(solution(1200021))
console.log(solution(1234567))
// console.log(solution(000000000))
