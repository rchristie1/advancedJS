/*
'''
❓ PROMPT
Most commercial software utilize logs to track what happens in the system and when. 
These logs often record everything including user actions (what features were used) as well as important things
that may happen deep in the back end. By looking at charts of how many events happen over 
the course of each hour teams can monitor the health of their products and systems. 
 
You are given an array of [timestamp, country] pairs representing the log for a particular event. 
Each timestamp represents the number of seconds since January 1, 1970, at 00:00:00 GMT. 
Your task is to write a function that takes this array of pairs and returns a map of country to a 
time sorted list of hourly event counts. Each hourly event count is a pair: the hour 
(timestamp rounded down to the nearest hour) and the event count in that hour.

Write a function count_events(events: List[List[int, str]]) -> Dict[str, List[Tuple[int, int]]] 
that takes the following parameter:

events: a list of [timestamp, country] pairs, where timestamp is an integer representing 
the number of seconds since January 1, 1970, at 00:00:00 GMT and country is a string representing the country code.

The function should return a dictionary that maps each country to a list of (hour, count) pairs, 
where hour is the timestamp rounded down to the nearest hour, and count is the number of events that 
occurred in that hour. The list should be sorted in ascending order of hour.

Example(s)
Input:
events = [
    [1615369200, 'US'],  # March 9, 2021 11:00:00 PM GMT
    [1615372800, 'US'],  # March 10, 2021 12:00:00 AM GMT
    [1615376400, 'US'],  # March 10, 2021 1:00:00 AM GMT
    [1615380000, 'US'],  # March 10, 2021 2:00:00 AM GMT
    [1615383600, 'US'],  # March 10, 2021 3:00:00 AM GMT
    [1615387200, 'US'],  # March 10, 2021 4:00:00 AM GMT
    [1615390800, 'US'],  # March 10, 2021 5:00:00 AM GMT
    [1615394400, 'US'],  # March 10, 2021 6:00:00 AM GMT
    [1615398000, 'US'],  # March 10, 2021 7:00:00 AM GMT
]

Output:
{
    'US': [
        (1615369200, 1),
        (1615372800, 1),
        (1615376400, 1),
        (1615380000, 1),
        (1615383600, 1),
        (1615387200, 1),
        (1615390800, 1),
        (1615394400, 1),
        (1615398000, 1),
    ],
}
 

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
def count_events(events: List[List[int, str]]) -> Dict[str, List[Tuple[int, int]]]
 

🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function testEvents(events) {
    let output = {}

    for([time, cc] of events) {
        let idx = -1

        if(cc in output) {
            console.log('found cc');
            
            const data = output[cc]
            const timeStamp = data[0]
            const count = data[1]

            if(timeStamp == time) {
                console.log('times match');
                Object.assign(output, {[cc]: [time, count+1]})
                // data[1] = count+1
            } else {
                console.log('times dont match');
                Object.assign(output, {[cc]: [time, 1]})
                // let d = output[cc].push([time, 1])
                // Object.assign(output, d)
                console.log(output)
                data.push([time, 1])
            }
        }

        if(idx >= 0) {
            
            // const data = arr[idx]
            // const currentTime = data[1][0]
            // const currentCount = data[1][1]

            

            // if(time == 1615402800) {
            //     console.log('wow');

            //     console.log(currentTime == time);
                
                
            // }
            
            if(time == currentTime) {
                // console.log('here');
                
                // if the times match update the count
                arr[1][1] = currentCount + 1
            } else {
                // if not then add a new item to the current array
                // arr[idx][1].push([time, 1])
                // console.log(arr[idx][1])
            }
            
        } else {
            Object.assign(output, {[cc]: [time, 1]})
        }
    }

    console.log(output)

    // check the time against a map?
    
    // count the duplicate entries

    // return the formatted map
    
}

// const events = [
//     [1615369200, 'US'],  // March 9, 2021 11:00:00 PM GMT
//     [1615372800, 'US'],  // March 10, 2021 12:00:00 AM GMT
//     [1615376400, 'US'],  // March 10, 2021 1:00:00 AM GMT
//     [1615380000, 'US'],  // March 10, 2021 2:00:00 AM GMT
//     [1615383600, 'US'],  // March 10, 2021 3:00:00 AM GMT
//     [1615387200, 'US'],  // March 10, 2021 4:00:00 AM GMT
//     [1615390800, 'US'],  // March 10, 2021 5:00:00 AM GMT
//     [1615394400, 'US'],  // March 10, 2021 6:00:00 AM GMT
//     [1615398000, 'US'],  // March 10, 2021 7:00:00 AM GMT
// ]

// testEvents(events)

const events2 = [
    [1615399200, 'US'],  // March 10, 2021 7:00:00 AM GMT
    [1615399200, 'US'],  // March 10, 2021 7:00:00 AM GMT
    [1615402800, 'US'],  // March 10, 2021 8:00:00 AM GMT
    [1615402800, 'US'],  // March 10, 2021 8:00:00 AM GMT
    [1615402800, 'US'],  // March 10, 2021 8:00:00 AM GMT
    [1615406400, 'US'],  // March 10, 2021 9:00:00 AM GMT
    [1615406400, 'US'],  // March 10, 2021 9:00:00 AM GMT
    [1615410000, 'US'],  // March 10, 2021 10:00:00 AM GMT
    [1615413600, 'US'],  // March 10, 2021 11:00:00 AM GMT
]

testEvents(events2)