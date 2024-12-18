/**
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function(s) {
    if(s.length < 4 || s.length > 12) return []
    
    const output = []

    function isValid(part) {
        // check if the given part is a vaild IP address component
        const number = parseInt(part, 10)
        return 0 <= number && number <= 255 && String(number) === part
    }

    // each time i find a valid ip, push it into the list
    function helper(word, current) {
        // If 4 parts and strings === 0 then it's a valid IP
        if(current.length === 4 && word.length === 0) {
            output.push(current.join('.'))
            return
        }

        // if there's 4 parts but there are still remaining values
        if(current.length === 4 && word.length > 0) {
            return
        }

        // Try forming new parts with 1, 2, or 3 characters from the remaining string.
        for(let i = 1; i < Math.min(4, word.length + 1); i++) {
            const part = word.slice(0, i)
            
            if(isValid(part)) {
                // If the part is valid, add it to the current list and continue backtracking.
                helper(word.slice(i), current.concat(part))
            }
        }
        
    }

    helper(s, [])

    return output;
};

// "25525511135" -> ["255.255.11.135","255.255.111.35"]
// "0000" -> ["0.0.0.0"]
// "101023" -> ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

console.log(restoreIpAddresses('25525511135'));
