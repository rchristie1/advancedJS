/*
'''
❓ PROMPT
Given a time in the hh:mm format, return the angle (to the closest whole degree) 
between the hour and the minute hands.

As a follow-up, find all the times when the angle between both hands is 0.

Example(s)
calcluateAngle(12:00) returns 0
calcluateAngle(12:30) returns 165
calcluateAngle(12:31) returns 171
calcluateAngle(11:59) returns 6
 

🔎 EXPLORE
List your assumptions & discoveries:
15 seconds from the top is 45deg therefore every 5 seconds is 15 degrees
take into consideration that the H hand moves gradually so at 1230 it's half way between 12 and 1
 
Each minute the clock moves 6 degrees (got this by doing 90/15)
at half way the hour hand is half way (ie. 12:30) the hand would be half way between 12 and 1
based on that at quarterway the hand would be quarter way

Insightful & revealing test cases:
 

🧠 BRAINSTORM
What approaches could work?
Algorithm 1:
Time: O()
Space: O()

*/

function calculateAngle(time) {
    if (!time) return
    // get minutes and hours
    let t = time.split(':')

    const hr = t[0]
    const min = t[1]
    
    if(min === 0) return 0

    const minuteAngle = 6 * min
    const hourAngle = 30 * hr + 0.5 * min

    const diff = Math.abs(hourAngle - minuteAngle)

    return Math.round(Math.min(diff, 360-diff))
}

console.log(calculateAngle('12:00')) // returns 0
console.log(calculateAngle('12:30')) // returns 165
console.log(calculateAngle('12:31')) // returns 171
console.log(calculateAngle('11:59')) // returns
console.log(calculateAngle("1:42") == 159)
console.log(calculateAngle("3:30") == 75)