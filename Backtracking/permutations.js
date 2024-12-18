// generate all permutaions of a string

function permutaions(s) {
    const output = []

    function helper(arr, used) {
        if (s.length === arr.length) {
            const value = arr.join('')
            // ignroes duplicates when populating the outoput array
            if(!output.includes(value)) {
                output.push(arr.join(''))
            }
            return;
        }
        
        for (let i = 0; i < s.length; i++) {
            // Skip used characters
            if (used[i]) continue;

            // Mark the character as used
            used[i] = true;
            arr.push(s[i])

            helper(arr, used)
            
            arr.pop()
            used[i] = false;
        }
    }

    // Array(s.length).fill(false) - keeps track of the elements that have already been used
    helper([], Array(s.length).fill(false))
    console.log(output);
    

    return output
}

permutaions('abc') // [  'abc', 'acb',  'bac', 'bca',  'cab', 'cba']