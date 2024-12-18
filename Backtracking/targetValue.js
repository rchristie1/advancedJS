/**
 * Given a set of units and a target value, return all of the ways that these units 
 * may be combined to achieve the target value. For example, for units [1, 2] and 
 * a target of 4, the output should be:

[
  [1, 1, 1, 1],
  [1, 1, 2],
  [2, 2]
]
Notice that [1, 2, 1] and [2, 1, 1] are also possibilities but we only return the 
one where the values are sorted from smallest to largest.

The units will always be a non-empty array of positive integers and sorted from 
small to large. The output should be ordered by those using the small units first 
before moving to larger and larger units.
 */


function targetV(units, target) {
    const output = []
    
    function helper(start, arr, value) {
        if(target === value) {
            output.push([...arr])
            return
        }

        if(value > target) return

        for (let i = start; i < units.length; i++) {
            arr.push(units[i])
            helper(i, arr, value + units[i])
            arr.pop()
        }
    }

    helper(0, [], 0)

    console.log(output);
    
    return output
}

targetV([1, 2], 4)

// units: [1, 2]
// target: 4
// Expected return value
// [[1,1,1,1], 
//  [1,1,2], 
//  [2,2]]

// units: [2, 5]
// target: 4
// Expected return value
// [[2,2]]

// units: [2, 5]
// target: 3
// Expected return value
// []

// units: [1, 2, 6]
// target: 18


// function solution(units, target) {
//     const output = []
    
//     function helper(start, arr, total) {
//         if(total === target) {
//             output.push([...arr])
//         }
        
//         if(total > target) return;
        
//         for(let i = start; i < units.length; i++) {
//             arr.push(units[i])
            
//             helper(i, arr, total + units[i])
            
//             arr.pop()
//         }    
//     }
    
    
//     helper(0, [], 0);
//     return output;
// }
